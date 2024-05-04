import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';

export const Button = ({ className, primary, label, path, nav, forBanner }) => {
  const openCalendlyPopup = () => {
    window.Calendly && window.Calendly.showPopupWidget('https://calendly.com/deveups/tester');
  };

  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const font = selectedLanguage === 'FR' ? 'font-Inter' : 'font-Cairo';
  let content = label[selectedLanguage];

  if (primary) {
    return (
      <Link to={path && path}>
        <button
          className={`transition-colors duration-300 bg-primary hover:bg-browney-cream text-white-smoke ${forBanner && 'border-white-smoke text-white-smoke hover:text-black'} py-2 px-6 font-light ${font}  ${className}`}
        >
          {content}
        </button>
      </Link>
    );
  } else {
    return (
        <button
          onClick={openCalendlyPopup}
          className={`${nav && '!bg-primary hover:!bg-browney-cream border-0 text-white-smoke'} transition-colors duration-300 bg-transparent border border-3 border-black text-black hover:bg-white-smoke ${forBanner && 'border-white-smoke text-white-smoke  hover:text-black'} py-2 px-6 font-light  ${font} ${className}`}
        >
          {content}
        </button>
    );
  }
};


