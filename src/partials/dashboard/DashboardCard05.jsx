import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function DashboardCard03() {
  const [rgbValues, setRgbValues] = useState({ r: 0, g: 0, b: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeChannel, setActiveChannel] = useState(null);
  const canvasRef = useRef(null);

  // Fetch RGB data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [redRes, greenRes, blueRes] = await Promise.all([
          axios.get('http://localhost:3000/red'),
          axios.get('http://localhost:3000/green'),
          axios.get('http://localhost:3000/blue')
        ]);

        setRgbValues({
          r: redRes.data?.red || 0,
          g: greenRes.data?.green || 0,
          b: blueRes.data?.blue || 0
        });
      } catch (error) {
        console.error('Error fetching RGB data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  // Draw RGB visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw color spectrum background
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(255,0,0,0.7)');
    gradient.addColorStop(0.5, 'rgba(0,255,0,0.7)');
    gradient.addColorStop(1, 'rgba(0,0,255,0.7)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, height * 0.6, width, height * 0.2);

    // Draw current color indicator
    const currentColor = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(
      width * (rgbValues.r / 255) * 0.3 + width * (rgbValues.g / 255) * 0.4 + width * (rgbValues.b / 255) * 0.3,
      height * 0.5,
      15,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw value indicators
    ['r', 'g', 'b'].forEach((channel, i) => {
      const yPos = height * 0.8 + i * 30;
      const value = rgbValues[channel];
      const channelColor = channel === 'r' ? 'red' : channel === 'g' ? 'green' : 'blue';
      
      // Channel label
      ctx.fillStyle = '#005F6A';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(`${channel.toUpperCase()}:`, 10, yPos - 5);
      
      // Value bar
      ctx.fillStyle = channelColor;
      ctx.fillRect(40, yPos - 15, (width - 50) * (value / 255), 10);
      
      // Value text
      ctx.fillStyle = '#005F6A';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(value, 50 + (width - 50) * (value / 255), yPos - 5);
    });
  }, [rgbValues]);

  const handleChannelHover = (channel) => {
    setActiveChannel(channel);
  };

  const handleChannelLeave = () => {
    setActiveChannel(null);
  };

  // Custom color swatch component
  const ColorSwatch = ({ color }) => (
    <div 
      className="rounded-lg border-2 border-white shadow-md"
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: color,
        transition: 'all 0.3s ease'
      }}
    />
  );

  return (
    <motion.div
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 rounded-xl overflow-hidden border border-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        boxShadow: isHovered ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)'
      }}
    >
      <div className="px-5 pt-3">
        <header className="flex justify-between items-start mb-3">
          <motion.div
            animate={isHovered ? { rotate: 15, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill={`rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`}
              stroke="#005F6A" 
              strokeWidth="2"
            >
              <path d="M7 2h10v4h-4v2h-2V6H7V2z" />
              <rect x="5" y="8" width="14" height="12" rx="1" />
              <circle cx="12" cy="14" r="2" />
            </svg>
          </motion.div>
          <div className="text-right">
            <motion.div 
              className="text-xs font-medium text-slate-500"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              Live Color Data
            </motion.div>
            <motion.div 
              className="text-sm font-bold"
              style={{ color: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})` }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
            >
              RGB Sensor
            </motion.div>
          </div>
        </header>

        <h2 className="text-xl font-bold mb-1 text-slate-800">Environmental Colors</h2>
        <div className="text-sm font-medium text-slate-600 mb-4">Real-time RGB Spectrum Analysis</div>
      </div>

      <div className="flex flex-col items-center px-5 pb-0">
        <div className="relative w-full h-30 mb-0">
          <canvas 
            ref={canvasRef} 
            width={400} 
            height={200}
            className="w-full h-full"
          />
        </div>

        <div className="w-full">
          <div className="flex justify-between mb-4">
            {['r', 'g', 'b'].map((channel) => (
              <motion.div
                key={channel}
                className="flex flex-col items-center"
                onMouseEnter={() => handleChannelHover(channel)}
                onMouseLeave={handleChannelLeave}
                animate={{
                  scale: activeChannel === channel ? 1.1 : 1,
                  opacity: activeChannel && activeChannel !== channel ? 0.7 : 1
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: channel === 'r' ? 'rgba(255,0,0,0.2)' : 
                                      channel === 'g' ? 'rgba(0,255,0,0.2)' : 
                                      'rgba(0,0,255,0.2)',
                    border: `2px solid ${channel === 'r' ? 'red' : channel === 'g' ? 'green' : 'blue'}`
                  }}
                >
                  <span className="font-bold" style={{ 
                    color: channel === 'r' ? 'red' : channel === 'g' ? 'green' : 'blue' 
                  }}>
                    {rgbValues[channel]}
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase" style={{ 
                  color: channel === 'r' ? 'red' : channel === 'g' ? 'green' : 'blue' 
                }}>
                  {channel.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-center mb-3">
              <ColorSwatch 
                color={`rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`} 
              />
              <div className="ml-4">
                <div className="text-sm font-medium text-slate-600">Current Color</div>
                <div className="text-lg font-bold" style={{ 
                  color: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})` 
                }}>
                  RGB({rgbValues.r}, {rgbValues.g}, {rgbValues.b})
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="h-2 w-full"
        style={{ backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})` }}
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
}

export default DashboardCard03;