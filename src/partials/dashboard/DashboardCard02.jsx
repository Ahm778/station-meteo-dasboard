import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

function DashboardCard03() {
 const [humidity, setHumidity] = useState(null);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
 axios.get('http://localhost:3000/humidity')
 .then(response => {
 if (!response.data.humidity) {
 throw new Error('Données d\'humidité non disponibles');
 }
 setHumidity(response.data.humidity);
 })
 .catch(error => console.error('Erreur lors de la récupération de l\'humidité :', error));
 }, []);

 const getHumidityColor = (value) => {
 if (value < 30) return '#81D4FA'; // Bleu clair (sec)
 if (value < 60) return '#4CAF50'; // Vert (confortable)
 if (value < 80) return '#FFC107'; // Jaune (humide)
 return '#F44336'; // Rouge (très humide)
 };

 const getHumidityStatus = (value) => {
 if (!value) return 'N/A';
 if (value < 30) return 'Sec';
 if (value < 60) return 'Confortable';
 if (value < 80) return 'Humide';
 return 'Très humide';
 };

 const handleMouseEnter = () => {
 setIsHovered(true);
 };

 const handleMouseLeave = () => {
 setIsHovered(false);
 };

 return (
 <div 
 className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
 isHovered ? 'bg-gray-100 dark:bg-slate-800 transform scale-[1.02]' : 'bg-white dark:bg-slate-900'
 }`}
 onMouseEnter={handleMouseEnter}
 onMouseLeave={handleMouseLeave}
 >
 <div className="px-5 pt-3">
 <header className="flex justify-between items-start mb-3">
 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="5 3.2 25 25" className="mr-0">
 <rect width="24" height="24" fill="none" />
 <path fill="currentColor" d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.044A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007M16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001" />
 </svg>
 </header>
 <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Weather Dashboard</h2>
 <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Humidity</div>
 </div>
 
 <div className="flex flex-col items-center justify-center p-4 flex-grow">
 <div style={{ width: 140, height: 140 }}>
 <CircularProgressbarWithChildren
 value={humidity || 0}
 minValue={0}
 maxValue={100}
 styles={buildStyles({
 pathColor: getHumidityColor(humidity),
 trailColor: '#E0E0E0',
 pathTransitionDuration: 1,
 pathTransition: 'ease-in-out',
 strokeLinecap: 'round',
 })}
 >
 <div className="text-center">
 <div className="text-4xl font-bold" style={{ color: getHumidityColor(humidity) }}>
 {humidity !== null ? `${humidity}%` : '--'}
 </div>
 <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
 {getHumidityStatus(humidity)}
 </div>
 </div>
 </CircularProgressbarWithChildren>
 </div>
 
 <div className="w-full mt-4 px-6">
 <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
 <span>0%</span>
 <span>30%</span>
 <span>60%</span>
 <span>100%</span>
 </div>
 <div className="relative h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
 <div 
 className="absolute h-full rounded-full"
 style={{
 width: `${humidity}%`,
 background: `linear-gradient(to right, #81D4FA, #4CAF50, #FFC107, #F44336)`,
 }}
 />
 </div>
 
          <div className="flex justify-between mt-1 text-xs">
            <span className="text-blue-400">Dry</span>
            <span className="text-green-500">Comfort</span>
            <span className="text-yellow-500">Humid</span>
            <span className="text-red-500">Very Humid</span>
 </div>
 </div>
 </div>
 </div>
 );
}

export default DashboardCard03;