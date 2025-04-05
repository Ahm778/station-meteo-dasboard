import React, { useState, useEffect } from 'react';
import LinearGauge from './LinearGauge/LinearGauge';
import EditMenu from '../../components/DropdownEditMenu';
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? 'rgb(192, 210, 225)' : '#E5EAEA';

  return (
    <div id="DashboardCard03" 
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-md rounded-sm border border-slate-200 dark:border-slate-700"
      style={{ backgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-5 pt-4">
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
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2"style={{ color: '#005F6A' }}>Weather Dashboard</h2>
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Atmospheric Pressure (hPa)</div>
        {/* Affichage de la valeur de la pressure atmosphérique */}
        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">{atmosphericPressure} hPa</div>
        {/* Utilisation de la jauge linéaire */}
        <div className="mt-12">
          <LinearGauge value={atmosphericPressure} min={20} max={500} />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
