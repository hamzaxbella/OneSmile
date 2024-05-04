import React, { useEffect } from 'react';

const CalendlyWidget = ({ url, isOpen, onClose }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <div className="calendly-inline-widget" data-url={url}></div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyWidget;
