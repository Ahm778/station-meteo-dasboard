import React, { useState, useEffect } from 'react';
import logo from '../../images/weather-icon.svg'; // Remplace si tu as un logo météo

function WelcomeBanner() {
  const [text, setText] = useState('');
  const [animationIndex, setAnimationIndex] = useState(0);
  const textArray = 'Bienvenue sur votre Station Météo Intelligente'.split('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (animationIndex < textArray.length) {
        setText(text + textArray[animationIndex]);
        setAnimationIndex(animationIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timerId);
  }, [animationIndex, textArray.length]);

  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        {/* Illustration SVG optionnelle */}
      </div>

      <div className="relative flex items-center justify-between">
        {/* Texte */}
        <div>
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
            {text}
          </h1>
          <p className="dark:text-indigo-200">
            Données météo en temps réel : température, humidité, pression, qualité de l'air...
          </p>
        </div>

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>
    </div>
  );
}

export default WelcomeBanner;
