import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import weatherIcon from '../../images/weather-icon.svg';

function WelcomeBanner() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Your Weather Dashboard';
  const features = ['Real-time Data', 'Smart Alerts', 'Precision Forecasts'];

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl overflow-hidden mb-8 shadow-sm border border-white/50">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-blue-200/20"></div>
        <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-indigo-200/20"></div>
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-300/10"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              scale: 1,
              opacity: 0.3,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        {/* Text content */}
        <div className="flex-1">
          <motion.h1 
            className="text-3xl font-medium text-slate-800 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {displayText}
            <span className="ml-1 inline-block w-1 h-6 bg-blue-400 animate-pulse align-middle"></span>
          </motion.h1>
          
          <motion.p 
            className="text-slate-600 text-lg mb-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Beautifully crafted weather monitoring with precision analytics
          </motion.p>
          
          {/* Features list */}
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xs border border-white"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-slate-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Weather icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="flex-shrink-0 hidden sm:block"
        >
          <img 
            src={weatherIcon} 
            alt="Weather Station" 
            className="h-24 w-24 text-blue-400 drop-shadow-sm" 
          />
        </motion.div>
      </div>
    </div>
  );
}

export default WelcomeBanner;