import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCalApi } from '@calcom/embed-react';
import { Context } from '../App';

export const Button = ({ className, primary, label, path, nav, forBanner }) => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const font = selectedLanguage === 'FR' ? 'font-Inter' : 'font-Cairo';
  let content = label[selectedLanguage];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal.ns['15min']('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  const openCalPopup = () => {
    const calButton = document.querySelector('button[data-cal-link]');
    calButton && calButton.click();
  };

  if (primary) {
    return (
      <Link to={path && path}>
        <button
          className={`transition-colors duration-300 bg-primary hover:bg-browney-cream text-white-smoke ${forBanner && 'border-white-smoke text-white-smoke hover:text-black'} py-2 px-6 font-light ${font} ${className}`}
        >
          {content}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={openCalPopup}
        className={`${nav && '!bg-primary hover:!bg-browney-cream border-0 text-white-smoke'} transition-colors duration-300 bg-transparent border border-3 border-black text-black hover:bg-white-smoke ${forBanner && 'border-white-smoke text-white-smoke hover:text-black'} py-2 px-6 font-light ${font} ${className}`}
      >
        {content}
        <button
          style={{ display: 'none' }}
          data-cal-namespace="15min"
          data-cal-link="hamza-xp8ep5/15min"
          data-cal-config='{"layout":"month_view"}'
        ></button>
      </button>
    );
  }
};
