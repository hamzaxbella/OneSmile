import { useEffect } from 'react';

// Performance optimization hooks and utilities for SEO

export const usePreloadImages = (imageUrls) => {
  useEffect(() => {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }, [imageUrls]);
};

export const useLazyLoading = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }, []);
};

// Critical resource preloading
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/src/assets/images/hero.webp',
    '/src/assets/images/logo.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    if (resource.includes('fonts.googleapis.com')) {
      link.as = 'style';
      link.crossOrigin = 'anonymous';
    } else if (resource.includes('.webp') || resource.includes('.png')) {
      link.as = 'image';
    }
    document.head.appendChild(link);
  });
};

// Core Web Vitals optimization
export const optimizeWebVitals = () => {
  // Reduce layout shift by setting image dimensions
  const images = document.querySelectorAll('img:not([width]):not([height])');
  images.forEach(img => {
    img.style.aspectRatio = '16/9'; // Default aspect ratio
  });

  // Optimize font loading
  if ('fontDisplay' in document.documentElement.style) {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
      }
      @font-face {
        font-family: 'Cairo';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }
};
