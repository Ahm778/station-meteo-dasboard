import React, { useState, useEffect } from 'react';
import logo from '../../images/an.svg'; // Importez votre logo depuis le dossier des actifs

function WelcomeBanner() {
  const [text, setText] = useState('');
  const [animationIndex, setAnimationIndex] = useState(0);
  const textArray = 'Welcome to Maritime Data Dashboard '.split(''); // Split text into letters

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (animationIndex < textArray.length) {
        setText(text + textArray[animationIndex]);
        setAnimationIndex(animationIndex + 1);
      }
    }, 100); // Adjust delay for desired animation speed (in milliseconds)

    return () => clearTimeout(timerId); // Cleanup function for removing timeout
  }, [animationIndex, textArray.length]);

  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        {/* SVG illustration for background */}
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-between"> {/* Utilisez justify-between pour placer les éléments à l'extrémité de l'espace disponible */}
        {/* Text */}
        <div>
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
            {text} {/* Display animated text */}
          </h1>
          <p className="dark:text-indigo-200">Here is the real-time data from maritime sensors:</p>
        </div>

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16 w-auto" /> {/* Ajustez la taille du logo en modifiant la classe h-16 */}
      </div>
    </div>
  );
}

export default WelcomeBanner;
