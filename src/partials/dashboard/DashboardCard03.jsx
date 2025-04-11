import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

function DashboardCard03() {
 const [atmosphericPressure, setAtmosphericPressure] = useState(null);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
 axios.get('http://localhost:3000/pressure')
 .then(response => {
 if (!response.data.pressure) {
 alert("Data not available");
 throw new Error('Pressure data not available');
 }
 setAtmosphericPressure(response.data.pressure);
 })
 .catch(error => console.error('Error fetching atmospheric pressure:', error));
 }, []);

 const getPressureColor = (value) => {
 if (!value) return '#90A4AE';
 if (value < 980) return '#EF5350'; // Basse pression (rouge)
 if (value < 1010) return '#FFA726'; // Pression moyenne (orange)
 if (value < 1030) return '#66BB6A'; // Pression normale (vert)
 return '#42A5F5'; // Haute pression (bleu)
 };

 const getPressureStatus = (value) => {
 if (!value) return 'N/A';
 if (value < 980) return 'Basse pression';
 if (value < 1010) return 'Pression moyenne';
 if (value < 1030) return 'Pression normale';
 return 'Haute pression';
 };

 const handleMouseEnter = () => {
 setIsHovered(true);
 };

 const handleMouseLeave = () => {
 setIsHovered(false);
 };

 return (
 <div id="DashboardCard03" 
 className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
 isHovered ? 'bg-gray-100 dark:bg-slate-800 transform scale-[1.02]' : 'bg-white dark:bg-slate-900'
 }`}
 onMouseEnter={handleMouseEnter}
 onMouseLeave={handleMouseLeave}
 >
 <div className="px-5 pt-3">
 <header className="flex justify-between items-start mb-2">
 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48" className="mr-4">
 <rect width="48" height="48" fill="none" />
 <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
 <path strokeLinejoin="round" d="M8.92 8.714C8.495 7.39 9.476 6 10.867 6h26.266c1.391 0 2.372 1.39 1.947 2.714C37.9 12.4 36 19.09 36 24s1.9 11.6 3.08 15.286c.425 1.325-.556 2.714-1.947 2.714H10.867c-1.391 0-2.372-1.39-1.947-2.714C10.1 35.6 12 28.91 12 24S10.1 12.4 8.92 8.714M4 15c1.5 2 2 6 2 9s-.5 7-2 9" />
 <path d="M18 15.5h12M18 24h12m-12 8h4" />
 <path strokeLinejoin="round" d="M44 15c-1.5 2-2 6-2 9s.5 6 2 9" />
 </g>
 </svg>
 </header>
 <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Weather Dashboard</h2>
 <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Atmospheric Pressure (hPa)</div>
 </div>
 
 <div className="flex flex-col items-center justify-center p-4 flex-grow">
 <div style={{ width: 140, height: 140 }}>
 <CircularProgressbarWithChildren
 value={atmosphericPressure ? atmosphericPressure - 900 : 0} // Ajustement pour la plage 900-1100 hPa
 minValue={0}
 maxValue={200}
 styles={buildStyles({
 pathColor: getPressureColor(atmosphericPressure),
 trailColor: '#E0E0E0',
 pathTransitionDuration: 1,
 pathTransition: 'ease-in-out',
 strokeLinecap: 'round',
 })}
 >
 <div className="text-center">
 <div className="text-4xl font-bold" style={{ color: getPressureColor(atmosphericPressure) }}>
 {atmosphericPressure !== null ? `${atmosphericPressure}` : '--'}
 </div>
 <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
 hPa
 </div>
 <div className="text-sm mt-1" style={{ color: getPressureColor(atmosphericPressure) }}>
 {getPressureStatus(atmosphericPressure)}
 </div>
 </div>
 </CircularProgressbarWithChildren>
 </div>
 
 <div className="w-full mt-4 px-6">
 <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
 <span>900</span>
 <span>980</span>
 <span>1010</span>
 <span>1100</span>
 </div>
 <div className="relative h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
 <div 
 className="absolute h-full rounded-full"
 style={{
 width: `${((atmosphericPressure - 900) / 200) * 100}%`,
 background: `linear-gradient(to right, #EF5350, #FFA726, #66BB6A, #42A5F5)`,
 }}
 />
 </div>
 <div className="flex justify-between mt-1 text-xs">
  <span className="text-red-500">Low</span>
  <span className="text-orange-500">Medium</span>
  <span className="text-green-500">Normal</span>
  <span className="text-blue-500">High</span>
</div>
 </div>
 </div>
 </div>
 );
}

export default DashboardCard03;