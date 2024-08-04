// src/analytics.jsx

// Fungsi untuk melacak pageview
export const trackPage = (url) => {
    if (window.gtag) {
      window.gtag('config', 'G-28NJBSR02B', {
        page_path: url,
      });
    }
  };
  
  // Fungsi untuk melacak events
  export const trackEvent = (category, action, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };
  