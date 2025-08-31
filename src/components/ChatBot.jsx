import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from '../App';

const ChatBot = () => {
  const [selectedLanguage] = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);
  const font = selectedLanguage === "FR" ? "font-Inter" : "font-Cairo";

  // Sound effects with smooth audio
  const playSound = (type) => {
    if (!soundEnabled) return; // Don't play if sound is disabled
    
    try {
      // Create audio context with better compatibility
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Resume audio context if suspended (required for some browsers)
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      switch(type) {
        case 'send':
          createSmoothTone(audioContext, 440, 0.15, 'sine'); // A note, soft sine wave
          break;
        case 'receive':
          createNotificationSound(audioContext); // Pleasant notification sound
          break;
        case 'typing':
          createSubtleTick(audioContext); // Very subtle tick
          break;
      }
    } catch (error) {
      console.log('Audio not available:', error);
    }
  };

  // Create smooth tone with fade in/out
  const createSmoothTone = (audioContext, frequency, duration, waveType = 'sine') => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = waveType;
    
    // Smooth fade in and out
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.03, now + 0.02); // Gentle fade in
    gainNode.gain.linearRampToValueAtTime(0.03, now + duration - 0.05); // Hold
    gainNode.gain.linearRampToValueAtTime(0, now + duration); // Smooth fade out
    
    oscillator.start(now);
    oscillator.stop(now + duration);
  };

  // Create pleasant notification sound (two-tone)
  const createNotificationSound = (audioContext) => {
    const now = audioContext.currentTime;
    
    // First tone (higher)
    createSmoothTone(audioContext, 523.25, 0.12, 'sine'); // C5
    
    // Second tone (lower) - slightly delayed
    setTimeout(() => {
      if (audioContext.state !== 'closed') {
        createSmoothTone(audioContext, 392, 0.15, 'sine'); // G4
      }
    }, 80);
  };

  // Create very subtle tick sound
  const createSubtleTick = (audioContext) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 1000;
    oscillator.type = 'triangle';
    
    // Low-pass filter for softer sound
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.01, now + 0.005); // Very quiet
    gainNode.gain.linearRampToValueAtTime(0, now + 0.03); // Very short
    
    oscillator.start(now);
    oscillator.stop(now + 0.03);
  };

  // Markdown rendering function
  const renderMarkdown = (text) => {
    if (!text) return '';
    
    let html = text;
    
    // Bold text (**text** or __text__)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // Italic text (*text* or _text_)
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');
    
    // Code blocks (```code```)
    html = html.replace(/```(.*?)```/gs, '<code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">$1</code>');
    
    // Inline code (`code`)
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-200 px-1 rounded text-xs">$1</code>');
    
    // Line breaks
    html = html.replace(/\n/g, '<br>');
    
    // Lists (- item or * item)
    html = html.replace(/^[\s]*[-\*]\s+(.*$)/gim, '<li class="ml-4">• $1</li>');
    
    // Links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-500 underline" target="_blank">$1</a>');
    
    // Phone numbers
    html = html.replace(/(\+\d{1,3}[\s\-]?\d{9,})/g, '<a href="tel:$1" class="text-primary font-semibold">$1</a>');
    
    // Email addresses
    html = html.replace(/([\w\.-]+@[\w\.-]+\.\w+)/g, '<a href="mailto:$1" class="text-primary font-semibold">$1</a>');
    
    return html;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Load preferences from localStorage
    try {
      const savedSoundPreference = localStorage.getItem('onesmile_sound_enabled');
      if (savedSoundPreference !== null) {
        setSoundEnabled(JSON.parse(savedSoundPreference));
      }
      
      const savedClickedState = localStorage.getItem('onesmile_widget_clicked');
      if (savedClickedState !== null) {
        setHasBeenClicked(JSON.parse(savedClickedState));
      }
    } catch (error) {
      console.log('Could not load preferences:', error);
    }
  }, []);

  useEffect(() => {
    // Save sound preference to localStorage
    try {
      localStorage.setItem('onesmile_sound_enabled', JSON.stringify(soundEnabled));
    } catch (error) {
      console.log('Could not save sound preference:', error);
    }
  }, [soundEnabled]);

  useEffect(() => {
    // Save widget clicked state to localStorage
    try {
      localStorage.setItem('onesmile_widget_clicked', JSON.stringify(hasBeenClicked));
    } catch (error) {
      console.log('Could not save widget clicked state:', error);
    }
  }, [hasBeenClicked]);

  useEffect(() => {
    // Initialize with welcome message when chat opens
    if (isOpen && messages.length === 0) {
      // Load conversation history first
      loadConversationHistory();
      
      const welcomeMessage = selectedLanguage === 'FR' 
        ? "👋 **Bonjour !** Je suis l'assistant virtuel de *OneSmile*. Comment puis-je vous aider avec vos questions sur le blanchiment dentaire ?"
        : "👋 **مرحباً!** أنا المساعد الافتراضي لـ *OneSmile*. كيف يمكنني مساعدتك بأسئلتك حول تبييض الأسنان؟";
      
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: welcomeMessage,
          sender: 'bot',
          timestamp: new Date()
        }]);
        playSound('receive');
      }, 500);
    }
  }, [isOpen, selectedLanguage]);

  // Conversation memory management
  const addToConversationHistory = (userMessage, botResponse) => {
    const newEntry = {
      user: userMessage,
      assistant: botResponse,
      timestamp: new Date().toISOString()
    };
    
    setConversationHistory(prev => {
      // Keep last 10 exchanges to maintain context while avoiding token limits
      const updatedHistory = [...prev, newEntry];
      const finalHistory = updatedHistory.slice(-10);
      
      // Persist to localStorage
      try {
        localStorage.setItem('onesmile_chat_history', JSON.stringify(finalHistory));
      } catch (error) {
        console.log('Could not save chat history to localStorage:', error);
      }
      
      return finalHistory;
    });
  };

  const loadConversationHistory = () => {
    try {
      const saved = localStorage.getItem('onesmile_chat_history');
      if (saved) {
        const parsedHistory = JSON.parse(saved);
        // Only load recent history (last 24 hours)
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const recentHistory = parsedHistory.filter(entry => 
          new Date(entry.timestamp) > oneDayAgo
        );
        setConversationHistory(recentHistory);
      }
    } catch (error) {
      console.log('Could not load chat history from localStorage:', error);
    }
  };

  const clearConversationHistory = () => {
    setConversationHistory([]);
    try {
      localStorage.removeItem('onesmile_chat_history');
    } catch (error) {
      console.log('Could not clear chat history from localStorage:', error);
    }
  };

  const getConversationContext = () => {
    if (conversationHistory.length === 0) return '';
    
    const contextPrompt = selectedLanguage === 'FR' 
      ? '\n\nCONTEXTE DE LA CONVERSATION PRÉCÉDENTE:'
      : '\n\nسياق المحادثة السابقة:';
    
    const conversationText = conversationHistory.map(entry => 
      `User: ${entry.user}\nAssistant: ${entry.assistant}`
    ).join('\n\n');
    
    return `${contextPrompt}\n${conversationText}\n\n`;
  };

  const sendToGemini = async (message) => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('Gemini API key not found');
      }

      const systemPrompt = selectedLanguage === 'FR' ? `
        IDENTITÉ ET RÔLE:
        Tu es l'assistant virtuel professionnel de OneSmile, l'institut de blanchiment dentaire de référence situé à Agadir, Maroc. Tu représentes une équipe expérimentée et professionnelle spécialisée dans les traitements cosmétiques dentaires.

        À PROPOS DE ONESMILE:
        OneSmile est le cabinet de blanchiment dentaire de référence à Agadir, offrant une vaste gamme de services pour répondre à tous les besoins en matière de blanchiment dentaire. Fort d'une expérience de plusieurs années, l'établissement s'est distingué par son professionnalisme et son dévouement à fournir des résultats exceptionnels. OneSmile a eu le privilège de servir de nombreux clients, leur procurant des sourires radieux et une confiance retrouvée.

        SERVICES OFFERTS:
        1. Blanchiment-éclaircicement dentaire - Traitement professionnel avec technologie avancée (30min à 2h)
        2. Détartrage et polissage - Techniques douces et efficaces pour éliminer le tartre
        3. Snap-On Smile - Solution non-invasive, superposition personnalisée amovible
        4. Prothèse dentaire - Prothèses sur mesure, ajustement parfait pour confort et fonctionnalité
        5. Gouttière dentaire - Gouttières personnalisées pour blanchiment à domicile et protection
        6. Bijoux Dentaires & Grillz - Designs variés, sûrs et non-invasifs, facilement amovibles

        TARIFS:
        - Fast White: 500 DH (Une séance, 30min)
        - Glamorous White: 700 DH (Deux séances, 60min)  
        - Extra White: 1200 DH (Trois séances, 120min)
        - Bijoux dentaires & Grillz: À partir de 150 DH
        - Paiement en espèces accepté
        - Séance duo: prix par personne

        INFORMATIONS PRATIQUES:
        - Horaires: Lundi-Samedi 10h00-17h30, Dimanche fermé
        - Téléphone: +212658547264
        - Email: osmile.be@gmail.com
        - Adresse: Agadir, Maroc
        - Réseaux sociaux: Facebook, Instagram, Threads, TikTok (@onesmilemaroc)

        QUESTIONS FRÉQUENTES À CONNAÎTRE:
        - Le blanchiment utilise des agents qui pénètrent l'émail pour éliminer taches et décoloration
        - Traitement sûr quand effectué par des experts, pas de dommage aux dents
        - Durée: 30min à 1h en une séance selon le traitement choisi
        - Résultats visibles et durables avec soins appropriés

        RÈGLES DE COMMUNICATION:
        ✅ Rester professionnel, chaleureux et rassurant
        ✅ Toujours encourager la consultation pour conseils personnalisés  
        ✅ Mettre l'accent sur la sécurité et l'expertise professionnelle
        ✅ Rester dans le domaine dentaire/cosmétique
        ✅ Proposer de prendre rendez-vous pour évaluation personnalisée
        ✅ Utiliser le contexte de la conversation précédente pour personnaliser les réponses
        ✅ Faire référence aux échanges précédents quand approprié
        ✅ Éviter de répéter les mêmes informations déjà données dans la conversation
        ❌ Ne jamais garantir de résultats spécifiques
        ❌ Ne pas donner de diagnostic médical
        ❌ Ne pas traiter les urgences dentaires (rediriger vers services d'urgence)

        OBJECTIF: Fournir des informations précises, encourager les consultations et aider les visiteurs à prendre des décisions éclairées concernant leurs soins dentaires cosmétiques en maintenant une conversation cohérente et personnalisée.
      ` : `
        الهوية والدور:
        أنت المساعد الافتراضي المحترف لـ OneSmile، معهد تبييض الأسنان الرائد في أكادير، المغرب. تمثل فريقاً ذا خبرة ومهنية متخصصاً في علاجات تجميل الأسنان.

        حول OneSmile:
        يقع مقر عيادة One Smile في مدينة أكادير بالمغرب، وهي العيادة الرائدة في مجال تبييض الأسنان، حيث تقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجات تبييض الأسنان. مع سنوات عديدة من الخبرة، تميزت عيادتنا بمهنيتها وتفانيها في تقديم نتائج استثنائية. لقد كان لنا شرف خدمة العديد من العملاء، وتزويدهم بابتسامات مشرقة وثقة جديدة.

        الخدمات المقدمة:
        1. تبييض وتلميع الأسنان - علاج احترافي بتقنية متقدمة (30 دقيقة إلى ساعتين)
        2. إزالة الجير - تقنيات لطيفة وفعالة لإزالة تراكم الجير بأمان
        3. ابتسامة سريعة - حل غير جراحي، طقم مخصص قابل للإزالة
        4. أطقم الأسنان - أطقم مخصصة، ملاءمة مثالية للراحة والوظائف
        5. واقي الأسنان - واقيات مخصصة للتبييض المنزلي والحماية
        6. مجوهرات الأسنان - تصاميم متنوعة، آمنة وغير جراحية، قابلة للإزالة بسهولة

        التعريفات:
        - تبييض سريع: 500 درهم (جلسة واحدة، 30 دقيقة)
        - تبييض فاخر: 700 درهم (جلستان، 60 دقيقة)
        - تبييض إضافي: 1200 درهم (ثلاث جلسات، 120 دقيقة)
        - مجوهرات الأسنان: ابتداءً من 150 درهم
        - الدفع نقداً أو بالبطاقة الائتمانية
        - جلسة مزدوجة: السعر لكل شخص

        معلومات عملية:
        - ساعات العمل: الاثنين-السبت 10:00-17:30، الأحد مغلق
        - الهاتف: +212658547264
        - البريد الإلكتروني: osmile.be@gmail.com
        - العنوان: أكادير، المغرب
        - وسائل التواصل: فيسبوك، إنستغرام، ثريدز، تيك توك

        أسئلة شائعة مهمة:
        - التبييض يستخدم مواد تخترق المينا لإزالة البقع والتلون
        - العلاج آمن عند إجرائه بواسطة خبراء، لا ضرر للأسنان
        - المدة: 30 دقيقة إلى ساعتين في جلسة واحدة حسب العلاج
        - نتائج مرئية ودائمة مع العناية المناسبة

        قواعد التواصل:
        ✅ ابق مهنياً، ودوداً ومطمئناً
        ✅ شجع دائماً على الاستشارة للنصائح الشخصية
        ✅ ركز على السلامة والخبرة المهنية
        ✅ ابق في مجال طب الأسنان/التجميل
        ✅ اقترح حجز موعد للتقييم الشخصي
        ✅ استخدم سياق المحادثة السابقة لتخصيص الردود
        ✅ اشر إلى التبادلات السابقة عند الاقتضاء
        ✅ تجنب تكرار نفس المعلومات المعطاة في المحادثة
        ❌ لا تضمن نتائج محددة أبداً
        ❌ لا تقدم تشخيصاً طبياً
        ❌ لا تتعامل مع حالات الطوارئ (وجه لخدمات الطوارئ)

        الهدف: تقديم معلومات دقيقة، تشجيع الاستشارات ومساعدة الزوار على اتخاذ قرارات مدروسة بشأن علاجات تجميل الأسنان مع الحفاظ على محادثة متماسكة وشخصية.
      `;

      console.log('🤖 ChatBot: Sending message to Gemini:', message);

      // Build the complete prompt with conversation context
      const conversationContext = getConversationContext();
      const fullPrompt = `${systemPrompt}${conversationContext}Question du client: ${message}`;

      const requestBody = {
        contents: [{
          parts: [{
            text: fullPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 500,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      };

      console.log('🤖 ChatBot: Request body:', JSON.stringify(requestBody, null, 2));

      // Try multiple model endpoints with fallback system
      const modelEndpoints = [
        'gemini-1.5-flash',
        'gemini-1.5-pro', 
        'gemini-pro'
      ];

      let lastError = null;

      for (const model of modelEndpoints) {
        try {
          console.log(`🤖 ChatBot: Trying model: ${model}`);
          
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
          
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
          });

          console.log(`🤖 ChatBot: Response status from ${model}:`, response.status);

          if (!response.ok) {
            const errorText = await response.text();
            console.error(`🤖 ChatBot: HTTP Error from ${model}:`, response.status, errorText);
            lastError = new Error(`${model}: HTTP ${response.status} - ${errorText}`);
            continue; // Try next model
          }

          const data = await response.json();
          console.log(`🤖 ChatBot: Successful response from ${model}:`, data);

          if (!data.candidates || data.candidates.length === 0) {
            console.error(`🤖 ChatBot: No candidates in response from ${model}`);
            lastError = new Error(`${model}: No response candidates received`);
            continue;
          }

          const candidate = data.candidates[0];
          if (candidate.finishReason === 'SAFETY') {
            return selectedLanguage === 'FR' 
              ? "Désolé, je ne peux pas répondre à cette question pour des raisons de sécurité. Pouvez-vous reformuler votre demande ?"
              : "عذراً، لا يمكنني الإجابة على هذا السؤال لأسباب أمنية. هل يمكنك إعادة صياغة طلبك؟";
          }

          const botResponse = candidate.content?.parts?.[0]?.text;
          if (!botResponse) {
            console.error(`🤖 ChatBot: No text content in response from ${model}`);
            lastError = new Error(`${model}: Empty response text`);
            continue;
          }

          // Success! Return the response
          console.log(`🤖 ChatBot: Successfully got response from ${model}`);
          return botResponse;

        } catch (error) {
          console.error(`🤖 ChatBot: Error with model ${model}:`, error);
          lastError = error;
          continue; // Try next model
        }
      }

      // If we get here, all models failed
      throw lastError || new Error('All model endpoints failed');

    } catch (error) {
      console.error('🤖 ChatBot Error calling Gemini API:', error);
      return selectedLanguage === 'FR'
        ? `Désolé, je rencontre un problème technique (${error.message}). Veuillez contacter directement notre institut pour une assistance immédiate.`
        : `عذراً، أواجه مشكلة تقنية (${error.message}). يرجى الاتصال بمعهدنا مباشرة للحصول على المساعدة الفورية.`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    playSound('send');

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      playSound('typing');
    }, 300);

    try {
      const botResponse = await sendToGemini(inputMessage);
      
      setIsTyping(false);
      
      // Add typing animation delay before showing response
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        
        // Add to conversation memory
        addToConversationHistory(inputMessage, botResponse);
        
        playSound('receive');
      }, 500);
      
    } catch (error) {
      setIsTyping(false);
      const errorMessage = {
        id: Date.now() + 1,
        text: selectedLanguage === 'FR' 
          ? "Désolé, une erreur s'est produite. Veuillez réessayer."
          : "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = selectedLanguage === 'FR' ? [
    "Quels sont vos services ?",
    "Quels sont vos tarifs de blanchiment ?",
    "Comment prendre rendez-vous ?",
    "Le blanchiment est-il sûr ?",
    "Combien de temps dure le traitement ?",
    "Où êtes-vous situés à Agadir ?"
  ] : [
    "ما هي خدماتكم؟",
    "ما هي أسعار التبييض؟", 
    "كيف يمكنني حجز موعد؟",
    "هل التبييض آمن؟",
    "كم يستغرق العلاج؟",
    "أين موقعكم في أكادير؟"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end space-y-3">
          {/* Help message bubble - only show if widget hasn't been clicked before */}
          {!hasBeenClicked && (
            <div className="bg-white p-3 rounded-lg shadow-md max-w-[200px] text-sm border border-gray-200 transform transition-all duration-300 animate-fadeInUp">
              <p className={`${font} text-gray-700`}>
                {selectedLanguage === 'FR' 
                  ? "Besoin d'aide ? N'hésitez pas à me demander !"
                  : "هل تحتاج للمساعدة؟ لا تتردد في سؤالي!"}
              </p>
              <div className="absolute -bottom-2 right-5 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            </div>
          )}
          
          {/* Chat button - positioned above WhatsApp */}
          <button
            onClick={() => {
              setIsOpen(true);
              setHasBeenClicked(true); // Mark as clicked when widget is opened
              // Play subtle notification sound when opening
              playSound('receive');
            }}
            className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label={selectedLanguage === 'FR' ? 'Ouvrir le chat' : 'فتح المحادثة'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

          {/* WhatsApp button - positioned below chatbot */}
          <button
            onClick={() => {
              const phoneNumber = "+212658547264";
              const message = selectedLanguage === 'FR' 
                ? "Bonjour, je souhaite avoir plus d'informations sur vos services de blanchiment dentaire."
                : "مرحباً، أود الحصول على مزيد من المعلومات حول خدمات تبييض الأسنان.";
              const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
              playSound('send');
            }}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label={selectedLanguage === 'FR' ? 'Contacter sur WhatsApp' : 'التواصل عبر واتساب'}
            title={selectedLanguage === 'FR' ? 'Contacter sur WhatsApp' : 'التواصل عبر واتساب'}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-xl w-80 h-[500px] flex flex-col overflow-hidden border border-gray-200 transform transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`font-semibold ${font}`}>
              {selectedLanguage === 'FR' ? 'OneSmile Assistant' : 'مساعد OneSmile'}
            </span>
            {conversationHistory.length > 0 && (
              <span className="text-xs bg-white/20 px-1 py-0.5 rounded text-white/80">
                {conversationHistory.length}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {conversationHistory.length > 0 && (
              <button
                onClick={clearConversationHistory}
                className="text-white/70 hover:text-white transition-colors text-xs"
                title={selectedLanguage === 'FR' ? 'Nouvelle conversation' : 'محادثة جديدة'}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            )}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="text-white/70 hover:text-white transition-colors text-xs"
              title={selectedLanguage === 'FR' 
                ? (soundEnabled ? 'Désactiver le son' : 'Activer le son')
                : (soundEnabled ? 'إيقاف الصوت' : 'تشغيل الصوت')}
            >
              {soundEnabled ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H2v-6h3.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors transform "
              aria-label={selectedLanguage === 'FR' ? 'Fermer le chat' : 'إغلاق المحادثة'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} transform transition-all duration-500 ease-out`}
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div
                className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg shadow-sm transform transition-all duration-200  ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                } ${font}`}
                dir={selectedLanguage === 'AR' ? 'rtl' : 'ltr'}
              >
                <div 
                  className="text-sm whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
                />
                <p className={`text-xs mt-1 opacity-70 ${selectedLanguage === 'AR' ? 'text-right' : 'text-left'}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {(isLoading || isTyping) && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 px-3 py-2 rounded-lg shadow-sm animate-pulse">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
            <p className={`text-xs text-gray-500 mb-2 ${font}`}>
              {selectedLanguage === 'FR' ? 'Questions rapides :' : 'أسئلة سريعة:'}
            </p>
            <div className="flex flex-wrap gap-1">
              {quickQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className={`text-xs bg-white hover:bg-primary hover:text-white px-2 py-1 rounded border border-gray-200 transition-all duration-200 transform  ${font}`}
                  dir={selectedLanguage === 'AR' ? 'rtl' : 'ltr'}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={selectedLanguage === 'FR' ? 'Tapez votre message...' : 'اكتب رسالتك...'}
              className={`flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${font}`}
              dir={selectedLanguage === 'AR' ? 'rtl' : 'ltr'}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform  "
              aria-label={selectedLanguage === 'FR' ? 'Envoyer' : 'إرسال'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
