import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, useTransform, useSpring } from 'framer-motion';

function DashboardCard05() {
  const [lightIntensity, setLightIntensity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/lightIntensity');
        setLightIntensity(response.data.lightIntensity || 0);
      } catch (error) {
        console.error('Error fetching light intensity:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const percentage = Math.min(100, (lightIntensity / 1000) * 100);
  const rotation = useSpring(percentage * 1.8 - 90, {
    stiffness: 100,
    damping: 15
  });

  // Natural light-inspired color palette
  const getColorTheme = (lux) => {
    if (lux < 100) return { // Moonlight
      bg: 'linear-gradient(135deg, #0a0e23 0%, #1a1b3a 100%)',
      gauge: '#b399ff',
      text: '#e6e6ff',
      progressBg: 'rgba(179, 153, 255, 0.2)',
      label: 'Moonlight',
      glow: 'rgba(179, 153, 255, 0.3)'
    };
    if (lux < 300) return { // Sunrise
      bg: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
      gauge: '#ff5e62',
      text: '#5a2a27',
      progressBg: 'rgba(255, 94, 98, 0.2)',
      label: 'Sunrise',
      glow: 'rgba(255, 94, 98, 0.3)'
    };
    if (lux < 700) return { // Morning Light
      bg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      gauge: '#4facfe',
      text: '#1a3a72',
      progressBg: 'rgba(79, 172, 254, 0.2)',
      label: 'Morning',
      glow: 'rgba(79, 172, 254, 0.3)'
    };
    return { // Daylight
      bg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      gauge: '#ff9a44',
      text: '#7a3b11',
      progressBg: 'rgba(255, 154, 68, 0.2)',
      label: 'Daylight',
      glow: 'rgba(255, 154, 68, 0.3)'
    };
  };

  const colors = getColorTheme(lightIntensity);
  const scaleValue = useTransform(rotation, [-90, 90], [0.95, 1.05]);

  return (
    <motion.div 
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 rounded-2xl overflow-hidden border border-opacity-20 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        background: colors.bg,
        boxShadow: `0 8px 32px ${colors.glow}`,
        borderColor: colors.gauge
      }}
      whileHover={{ 
        y: -5,
        boxShadow: `0 15px 40px ${colors.glow}`
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Light particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: colors.gauge,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="px-6 pt-6 pb-7 relative z-10">
        {/* Header with icon and status */}
        <header className="flex justify-between items-start mb-4">
          <motion.div
            animate={isHovered ? { rotate: 15, scale: 1.05 } : { rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={colors.gauge} 
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M18.36 18.36l1.42 1.42" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M4.22 19.78l1.42-1.42" />
              <path d="M18.36 5.64l1.42-1.42" />
            </svg>
          </motion.div>
          
          <div className="flex flex-col items-end">
            <motion.div
              className="text-xs font-medium px-2 py-1 rounded-full mb-1"
              style={{
                background: 'rgba(255,255,255,0.3)',
                color: colors.text,
                backdropFilter: 'blur(4px)'
              }}
            >
              {isLoading ? 'Loading...' : 'Live'}
            </motion.div>
            <div className="text-xs font-medium" style={{ color: colors.gauge }}>
              {colors.label}
            </div>
          </div>
        </header>

        {/* Title and description */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1" style={{ color: colors.text }}>
            Light Intensity
          </h2>
          <div className="text-sm font-medium opacity-80" style={{ color: colors.text }}>
            Ambient light measurement
          </div>
        </div>
        
        {/* Circular gauge */}
        <div className="relative w-full h-40 mb-6 flex justify-center items-end">
          {/* Background arc */}
          <svg width="220" height="120" viewBox="0 0 220 120" className="absolute">
            <path 
              d="M 20 100 A 90 90 0 0 1 200 100"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Animated arc */}
            <motion.path 
              d="M 20 100 A 90 90 0 0 1 200 100"
              fill="none"
              stroke={colors.gauge}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="282.6"
              strokeDashoffset={282.6 - (282.6 * percentage / 100)}
              initial={{ strokeDashoffset: 282.6 }}
              animate={{ strokeDashoffset: 282.6 - (282.6 * percentage / 100) }}
              transition={{ duration: 2, type: 'spring' }}
            />
          </svg>
          
          {/* Needle */}
          <motion.div
            className="absolute bottom-0 w-1.5 h-24 origin-bottom z-10"
            style={{
              backgroundColor: colors.gauge,
              borderRadius: '4px',
              boxShadow: `0 0 12px ${colors.gauge}`,
              rotate: rotation,
              scaleY: scaleValue
            }}
          />
          
          {/* Center value */}
          <motion.div 
            className="absolute bottom-120 left-0 right-0 text-center"
            animate={{
              y: isHovered ? -3 : 0
            }}
          >
            <div 
              className="text-5xl font-bold mb-1" 
              style={{ 
                color: colors.text,
                textShadow: `0 0 10px ${colors.glow}`
              }}
            >
              {isLoading ? '--' : lightIntensity}
            </div>
            <div 
              className="text-xs font-medium uppercase tracking-wider opacity-80" 
              style={{ color: colors.text }}
            >
              Lux
            </div>
          </motion.div>
        </div>
        
        {/* Progress scale */}
        <div className="w-full">
          <div className="flex justify-between text-xs mb-2 px-1" style={{ color: colors.text }}>
            {[0, 250, 500, 750, 1000].map((value) => (
              <span key={value}>{value}{value === 1000 ? '+' : ''}</span>
            ))}
          </div>
          <div 
            className="relative h-2.5 rounded-full overflow-hidden"
            style={{ 
              backgroundColor: colors.progressBg,
              backdropFilter: 'blur(4px)'
            }}
          >
            <motion.div 
              className="absolute h-full rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${colors.gauge}, ${colors.gauge})`,
                width: `${percentage}%`,
                boxShadow: `0 0 8px ${colors.gauge}`
              }}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 2, type: 'spring' }}
            />
            <div 
              className="absolute h-full w-full rounded-full"
              style={{ 
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardCard05;