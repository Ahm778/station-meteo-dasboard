import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

function DashboardCard01() {
 const [temperature, setTemperature] = useState(null);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
 axios.get('http://localhost:3000/temperature')
 .then(response => {
 if (!response.data.temperature) {
 throw new Error('Données de température non disponibles');
 }
 setTemperature(response.data.temperature);
 })
 .catch(error => console.error('Erreur lors de la récupération de la température :', error));
 }, []);

 const getColorForTemperature = (temp) => {
 if (temp < 0) return '#4FC3F7'; // Bleu froid
 if (temp < 10) return '#81D4FA';
 if (temp < 20) return '#B3E5FC';
 if (temp < 30) return '#FFF176'; // Jaune doux
 return '#FF8A65'; // Rouge chaud
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
 <header className="flex justify-between items-start mb-2">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 0 24 24" width="30" height="30" className="mr-0">
                                  <path fill="currentColor" d="M16.5 22C18.7091 22 20.5 20.2091 20.5 18C20.5 16.9335 20.0827 15.9646 19.4024 15.2475C18.8957 14.7134 18.6423 14.4463 18.5712 14.2679C18.5 14.0895 18.5 13.8535 18.5 13.3815V4C18.5 2.89543 17.6046 2 16.5 2C15.3954 2 14.5 2.89543 14.5 4V13.3815C14.5 13.8535 14.5 14.0895 14.4288 14.2679C14.3577 14.4463 14.1043 14.7134 13.5976 15.2475C12.9173 15.9646 12.5 16.9335 12.5 18C12.5 20.2091 14.2909 22 16.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path fill="currentColor" d="M10.3133 15.8303C8.67792 15.5416 7.36329 14.104 7.20333 12.2607C7.01373 10.076 8.51806 8.14861 10.5634 7.95588C10.883 7.92576 11.197 7.9398 11.5 7.99327M10.2201 4L10.323 5.18677M6.04201 7.57572L5.18359 6.81058M4.611 12.505L3.5 12.6097M6.86776 17.0868L6.15499 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                               
                                </svg>
 </header>
 <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Weather Dashboard</h2>
 <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Temperature</div>
 </div>
 
 <div className="flex flex-col items-center justify-center p-3 flex-grow">
 <div style={{ width: 140, height: 140 }}>
 <CircularProgressbarWithChildren
 value={temperature || 0}
 minValue={-20}
 maxValue={50}
 styles={buildStyles({
 pathColor: getColorForTemperature(temperature),
 trailColor: '#E0E0E0',
 pathTransitionDuration: 1,
 pathTransition: 'ease-in-out',
 strokeLinecap: 'round',
 })}
 >
 <div className="text-center">
 <div className="text-4xl font-bold" style={{ color: getColorForTemperature(temperature) }}>
 {temperature !== null ? `${temperature}°C` : '--'}
 </div>
 <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
 {temperature !== null && (
 <span>
 {temperature < 0 ? 'Freezing' : 
 temperature < 10 ? 'Cold' : 
 temperature < 20 ? 'Cool' : 
 temperature < 30 ? 'Warm' : 'Hot'}
 </span>
 )}
 </div>
 </div>
 </CircularProgressbarWithChildren>
 </div>
 
 <div className="w-full mt-4 px-6">
 <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
 <span>-20°C</span>
 <span>0°C</span>
 <span>25°C</span>
 <span>50°C</span>
 </div>
 <div className="relative h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
 <div 
 className="absolute h-full rounded-full"
 style={{
 width: `${((temperature + 20) / 70) * 100}%`,
 background: `linear-gradient(to right, #4FC3F7, #81D4FA, #B3E5FC, #FFF176, #FFB74D, #FF8A65)`,
 }}
 />
 </div>
 </div>
 </div>
 </div>
 );
}

export default DashboardCard01;