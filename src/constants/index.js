import {
  email,
  facebook,
  instagram,
  location,
  phone,
  threads,
  tiktok,
  burger_menu,
  accordion,
  star
} from '../assets/icons'

import {
  service1,
  service2,
  service3,
  service4,
  ex1,
  ex2,
  ex3,
  ex4,
} from "../assets/images";

export const socialLinks = [
  {icon : facebook , path : 'https://www.facebook.com/onesmilemaroc' , alt : 'one smile facebook'},
  {icon : instagram , path : 'https://www.instagram.com/onesmile.maroc' , alt : 'one smile instagram'},
  {icon : threads , path : 'https://www.threads.net/@onesmile.maroc' , alt : 'one smile threads'},
  {icon : tiktok , path : 'https://www.tiktok.com/@onesmilemaroc' , alt : 'one smile tiktok'},
]

export const PrimaryLinks = {
  FR: [
    { name: "Accuille", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contactez", path: "/contact" },
  ],
  AR: [
    { name: "الرئيسية", path: "/" },
    { name: "الخدمات", path: "/services" },
    { name: "تواصل معنا", path: "/contact" },
  ],
};

export const secondaryLinks = {
  FR: [
    { name: "Politiaue de confidentality", path: "/privacypolicy" },
    { name: "conditions d'utilisation", path: "/terms" },
    { name: "Plan de site.", path: "/sitemap" },
  ],
  AR: [
    { name: "سياسة الخصوصية", path: "/privacypolicy" },
    { name: "شروط الإستخدام", path: "/terms" },
    { name: "خريطة الموقع", path: "/sitemap" },
  ],
};

export const HeroContent = {
  FR: [
    {
      Title: "Illuminez Votre Sourire, Rayonnez de Confiance – One Smile",
      Description:
        "Découvrez la magie d'un sourire éclatant avec One Smile. Nos traitements de blanchiment dentaire vous offrent un sourire resplendissant et une confiance retrouvée.",
    },
  ],
  AR: [
    {
      Title: "أحصل على ابتسامة مشرقة مع - One Smile",
      Description:
        "اكتشف سحر الابتسامة المبهرة مع One Smile. توفر لك علاجات تبييض الأسنان لدينا ابتسامة متألقة وثقة جديدة.",
    },
  ],
};

export const AboutContent = {
  FR: [
    {
      Title: "À propos de nous.",
      Description:
        "Basé à Agadir au Maroc, One Smile est le cabinet de blanchiment dentaire de référence, offrant une vaste gamme de services pour répondre à tous vos besoins en matière de blanchiments dentaires. Fort d'une expérience de plusieurs années, notre établissement s'est distingué par son professionnalisme et son dévouement à fournir des résultats exceptionnels. Nous avons eu le privilège de servir de nombreux clients, leur procurant des sourires radieux et une confiance retrouvée.",
    },
  ],
  AR: [
    {
      Title: "حولنا",
      Description:
        "يقع مقر عيادة One Smile في مدينة أغادير بالمغرب، وهي العيادة الرائدة في مجال تبييض الأسنان، حيث تقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجات تبييض الأسنان الخاصة بك. مع سنوات عديدة من الخبرة، تميزت عيادتنا بمهنيتها وتفانيها في تقديم نتائج استثنائية. لقد كان لنا شرف خدمة العديد من العملاء، وتزويدهم بابتسامات مشرقة وثقة جديدة.",
    },
  ],
};


export const ServicesContent = [
  {
    FR: 
      {
        Title: "Blanchiment-éclairciement dentaire",
        Description:
          "Obtenez un sourire plus éclatant et rayonnant grâce à notre traitement professionnel de blanchiment des dents. En utilisant une technologie de blanchiment avancée, nous éliminons efficacement les taches et la décoloration, vous laissant avec un sourire éblouissant que vous aimerez montrer.",
        img: service1,
      },
    
    AR:
      {
        Title: "تبييض وتلميع الاسنان",
        Description:
          "احصل على ابتسامة أكثر إشراقًا وجمالا مع علاج تبييض الأسنان الاحترافي لدينا. باستخدام تقنية تبييض متقدمة، نقوم بإزالة البقع وتغير اللون بشكل فعال، مما يترك لك ابتسامة مبهرة ستحب التباهي بها.",
        img: service1,
      },
  },
  {
    FR:
      {
        Title: "Détartrage et polissage",
        Description:
          "Maintenez une santé bucco-dentaire optimale avec notre service de dépistage du tartre. Nos professionnels dentaires qualifiés utilisent des techniques douces mais efficaces pour éliminer en toute sécurité l'accumulation de tartre, aidant à prévenir les maladies des gencives et à promouvoir le bien-être dentaire global.",
        img: service2,
      },
    AR:
      {
        Title: "إزالة الجير",
        Description:
          "حافظ على صحة الفم المثالية من خلال خدمة إزالة الجير لدينا. يستخدم أطباء الأسنان المدربون لدينا تقنيات لطيفة وفعالة لإزالة تراكم الجير بأمان، مما يساعد على الوقاية من أمراض اللثة وتعزيز صحة الأسنان بشكل عام.",
        img: service2,
      },
  },
  {
    FR:
      {
        Title: "Snap-On Smile",
        Description:
          "Transformez instantanément votre sourire avec notre service Snap-On Smiley. Cette solution innovante vous permet d'obtenir un sourire impeccable sans recourir à des interventions invasives. Il vous suffit de clipser l'appareil personnalisé sur vos dents naturelles pour dissimuler les imperfections et améliorer l'apparence de votre sourire.",
        img: service3,
      },
    AR:
      {
        Title: "ابتسامة سريعة",
        Description:
          "قم بتحويل ابتسامتك على الفور من خلال خدمة سناب اون سمايل الخاصة بنا. يتيح لك هذا الحل المبتكر تحقيق ابتسامة خالية من العيوب دون اللجوء إلى إجراءات جراحية. ما عليك سوى تثبيت الطقم المخصص على أسنانك الطبيعية لإخفاء العيوب وتحسين مظهر ابتسامتك.",
        img: service3,
      },
  },
  {
    FR:
      {
        Title: "Bijoux Dentaires & grillz",
        Description:
          "Ajoutez une touche d'éclat à votre sourire avec nos options de bijoux dentaires. Choisissez parmi une variété de designs élégants pour orner vos dents et exprimer votre personnalité unique. Nos bijoux dentaires sont sûrs, non invasifs et facilement amovibles, vous permettant de changer de look à votre guise.",
        img: service4,
      },
    AR:
      { Title: "مجوهرات الأسنان " ,
        Description:
          "أضف لمسة من التألق إلى ابتسامتك مع خيارات مجوهرات الأسنان لدينا. اختر من بين مجموعة متنوعة من التصاميم الأنيقة لتزيين أسنانك والتعبير عن شخصيتك الفريدة. مجوهرات الأسنان لدينا آمنة وغير جراحية وقابلة للإزالة بسهولة، مما يسمح لك بتغيير مظهرك كما يحلو لك.",
        img: service4,
      },
  },
];

export const CallToActionTitle = {
  FR : 'Prendre un rendez-vous',
  AR : 'أحجز موعدا'
}

export const FAQ = {
  FR: [
    {
      Q: "Quels sont les services offerts par votre cabinet dentaire ?",
      A: "Notre cabinet dentaire propose une gamme de services spécialisés, comprenant le blanchiment-éclaircissement dentaire, le détartrage et polissage, la pose de Snap-On Smile, ainsi que la pose de bijoux dentaires et de grillz.",
    },
    {
      Q: "Qu'est-ce que le blanchiment des dents et comment cela fonctionne-t-il ?",
      A: "Le blanchiment-éclaircissement dentaire est un traitement esthétique qui vise à éclaircir la couleur des dents pour leur donner un aspect plus blanc et plus lumineux. Il fonctionne en utilisant des agents de blanchiment qui pénètrent dans l'émail dentaire pour éliminer les taches et la décoloration.",
    },
    {
      Q: "Quelles sont les options de paiement disponibles pour les traitements dentaires ?",
      A: "Nous proposons plusieurs options de paiement flexibles pour nos traitements dentaires, y compris les paiements en espèces, par carte de crédit ou de débit",
    },
    {
      Q: "Combien de temps dure un traitement de blanchiment des dents ?",
      A: "La durée d'un traitement de blanchiment-éclaircissement dentaire peut varier en fonction de plusieurs facteurs, notamment le type de traitement utilisé et la sévérité des taches dentaires. En général, un traitement de blanchiment-éclaircissement dentaire peut prendre entre 30min jusqu'à 2 heures en une seule séance en cabinet.",
    },
    {
      Q: "Est-ce que le blanchiment des dents cause des dommages aux dents ?",
      A: "Non, cela n'entraîne aucun dommage aux dents lorsqu'il est effectué par des experts. Le blanchiment des dents, réalisé par des professionnels dentaires qualifiés, est considéré comme sûr. Il est essentiel de suivre leurs conseils et d'utiliser des produits de blanchiment dentaire approuvés pour garantir des résultats optimaux sans nuire aux dents. Si vous avez des préoccupations, il est toujours recommandé de consulter un professionnel dentaire pour obtenir des conseils personnalisés.",
    },
  ],
  AR: [
    {
      Q: "ما هي الخدمات التي تقدمها عيادة الأسنان الخاصة بنا؟",
      A: "تقدم عيادتنا لتبييض الأسنان مجموعة من الخدمات المتخصصة، بما في ذلك تبييض الأسنان، إزالة الجير وتلميع الأسنان، تركيب سناب أون سمايل، بالإضافة إلى تركيب مجوهرات الأسنان .",
    },
    {
      Q: "ما هو تبييض الأسنان وكيف يعمل؟",
      A: "تبييض الأسنان هو علاج تجميلي يهدف إلى تفتيح لون الأسنان لإعطائها مظهرًا أبيض وأكثر إشراقا. يعمل عن طريق استخدام مواد التبييض التي تخترق المينا لتبييض الأسنان وإزالة البقع والتلون. ",
    },
    {
      Q: "ما هي الخيارات المتاحة للدفع لدينا؟",
      A: "نقدم العديد من الخيارات المرنة للدفع لعلاجاتنا لتبييض الأسنان، بما في ذلك الدفع نقدًا، أو باستخدام بطاقات الائتمان أو الخصم.",
    },
    {
      Q: "كم يستغرق علاج تبييض الأسنان؟",
      A: "يمكن أن تختلف مدة علاج تبييض الأسنان اعتمادًا على عدة عوامل، بما في ذلك نوع العلاج المستخدم وشدة بقع الأسنان. بشكل عام، يمكن أن يستغرق علاج تبييض الأسنان بين 30 دقيقة إلى ساعتين في جلسة واحدة في العيادة.",
    },
    {
      Q: "هل يسبب التبييض  ضررًا للأسنان؟",
      A: "لا، لا يسبب أي ضرر للأسنان عندما يتم إجراؤه بواسطة خبراء. يعتبر تبييض الأسنان، عند إجرائه بواسطة متخصصين طب الأسنان المؤهلين، آمنًا. من الضروري اتباع توجيهاتهم واستخدام منتجات تبييض الأسنان المعتمدة لضمان النتائج المثلى دون إلحاق ضرر بالأسنان. إذا كان لديك أي مخاوف، فمن المستحسن دائمًا استشارة طبيب الأسنان المتخصص للحصول على نصائح مخصصة.",
    },
  ],
};

// Services page :
export const ServiceBannerContent = {
  FR: {
    title: "Découvrez le sourire radieux avec One Smile",
    Description:
      "Chez One Smile, nous vous offrons des traitements dentaires haut de gamme pour révéler votre plus beau sourire. Faites confiance à notre équipe expérimentée pour des résultats exceptionnels et un bien-être optimal.",
  },
  AR: {
    title: "أحصل على إبتسامة مشرقة مع  - One Smile",
    Description:
      "في One Smile، نقدم لك علاجات أسنان متطورة لتكشف عن أجمل ابتسامتك. ثق بفريقنا ذو الخبرة للحصول على نتائج استثنائية ورفاهية مثالية.",
  },
};

export const ServiceArticleContent = {
  FR: {
    title: "Service de Blanchiment Dentaire",
    description:
      "Notre service de blanchiment dentaire est conçu pour révéler un sourire éclatant et radieux qui vous donnera confiance en vous. Grâce à des techniques avancées et des produits professionnels, nos spécialistes du blanchiment dentaire peuvent éliminer efficacement les taches et la décoloration, laissant vos dents plus blanches et plus lumineuses.",
    process:
      "La procédure de blanchiment dentaire chez One Smile est rapide, sûre et efficace. Elle commence par une consultation initiale pour évaluer votre état dentaire et discuter de vos objectifs de blanchiment. Ensuite, un gel de blanchiment est appliqué sur vos dents et activé par une lumière spéciale pour accélérer le processus. En quelques séances, vous pouvez obtenir des résultats visibles et durables.",
    advantages: [
      "Un sourire plus lumineux et plus éclatant",
      "Élimination efficace des taches et de la décoloration",
      "Amélioration de la confiance en soi et de l'estime de soi",
      "Procédure rapide et confortable",
      "Résultats durables avec des soins dentaires appropriés",
      "Offrez-vous le sourire de vos rêves avec notre service de blanchiment dentaire professionnel. Découvrez une nouvelle confiance en vous et laissez votre sourire briller de mille feux chez One Smile.",
    ],
  },
  AR: {
    title: "خدمة تبييض الأسنان",
    description:
      "تم تصميم خدمتنا لتبييض الأسنان لكشف ابتسامة مشرقة ستمنحك الثقة بالنفس. من خلال تقنيات متقدمة ومنتجات احترافية، يمكن لخبرائنا في تبييض الأسنان القضاء بشكل فعال على البقع والتغيير في اللون، مما يترك أسنانك أكثر بياضًا وإشراقًا.",
    process:
      "إن إجراء تبييض الأسنان في One Smile سريع وآمن وفعال. يبدأ بمشاورة أولية لتقييم حالة أسنانك ومناقشة أهدافك في التبييض. ثم يتم تطبيق جل التبييض على أسنانك وتفعيله بواسطة ضوء خاص لتسريع العملية. في بضع جلسات، يمكنك الحصول على نتائج مرئية ودائمة.",
    advantages: [
      "ابتسامة أكثر إشراقًا وتألقًا",
      "القضاء الفعّال على البقع وتغيير اللون",
      "تحسين الثقة بالنفس وتقدير الذات",
      "إجراء سريع ومريح",
      "نتائج دائمة مع العناية لتبييض الأسنان المناسبة",
      "امنح نفسك ابتسامة أحلامك مع خدمتنا لتبييض الأسنان المحترفة. اكتشف الثقة الجديدة بنفسك ودع ابتسامتك تشع بألف نور في One Smile.",
    ],
  },
};

export const BeforAfterImages = [ex1, ex2, ex3, ex4];

export const ContactBannerContent = {
  FR: {
    title: "Prenez Contact pour un Sourire Radieux.",
    Description:
      "Chez One Smile, nous vous proposons des traitements dentaires haut de gamme pour révéler votre plus beau sourire. Faites-nous confiance pour des résultats exceptionnels et un bien-être optimal. Contactez-nous dès aujourd'hui pour commencer votre voyage vers un sourire éclatant et radieux.",
  },
  AR: {
    title: "أحصل على إبتسامة مشرقة مع  - One Smile",
    Description:
      "في One Smile، نقدم لك علاجات أسنان متطورة لتكشف عن أجمل ابتسامتك. ثق بفريقنا ذو الخبرة للحصول على نتائج استثنائية ورفاهية مثالية.",
  },
};

export const contactInfo = {
  FR: [
    {
      title: "Email",
      lable: "si vous avez des questions, n'hisitez a nous contactez.",
      link: "osmile.be@gmail.com",
      img : email
    },
    {
      title: "Téléphone",
      lable: "Appelez-nous et nous vous assistera rapidement",
      link: "osmile.be@gmail.com",
      img : phone
    },
    {
      title: "Email",
      lable:
        "Venez a notre cabinet et laissez-nous vous aider a obtenir beau sourire ",
      link: "Agadir, one smile",
      img : location
    },
  ],
  AR: [
    {
      title: "البريد الإلكتروني",
      lable: "لا تتردد بالتواصل معنا إدا كان لديك اي سؤال.",
      link: "osmile.be@gmail.com",
      img : email
    },
    {
      title: "الهاتف",
      lable: "اتصل بنا وسنساعدك في الحين",
      link: "osmile.be@gmail.com",
      img : phone
    },
    {
      title: "Email",
      lable: "زرنا في عيادتنا ودعنا نصمم ابتسامتك",
      link: "+212 6 58 54 72 64",
      img : location
    },
  ],
};


export const TestimonialsContent = [
  {client : 'DJINA YUSTE' , testimoial : `Première fois que je fait un blanchiment j’avais des aprioris ayant les dents et gencive très sensibles je m’attendez à avoir des douleurs et aucune vraiment même pas de sensibilité ressenti après rien ! Franchement foncer à l’aise et la dame est très gentille et a l’écoute j’ai gagner 6 teintes 😍 je recommande ! Merci ! …
  `},
  {client : 'Asma El bakkali' , testimoial : `On peut dire une chose c’est que lorsqu’on va chez One smile on est toujours accueillies avec un magnifique sourire et un accueil des plus chaleureux. On se sent bien et on est sûr de passez un bon moment de détente🤩 
  `},
  {client : 'Yousra Elka' , testimoial : `J’ai eu le plaisir de découvrir ce lieu lors de mon séjour au Maroc. Personnel très professionnel et agréable. Résultat immédiat sur les dents et surtout une hygiène irréprochable du lieu. Je vous souhaite beaucoup de succès
  `},
  {client : 'Farrah89 Ediiil89' , testimoial : `Je suis super satisfaite de mon blanchiment j'ai gagné 6 teintes en une séance ! Le personnel est agréable et pro et surtout je n'ai ressenti aucune douleur après ma séance... Je recommande +++
  `},
  {client : 'Brahim Kh' , testimoial : `Magnifique.  Merci beaucoup pour cette séance de blanchiment.    Au top.  Que ça soit l'hygiène ou votre professionnalisme, je recommande à 100%.

  Merci encore.  Je suis très très satisfait.
  
  `},
]