import React, { useState, useEffect } from 'react';
import LinearGauge from './LinearGauge/LinearGauge';
import EditMenu from '../../components/DropdownEditMenu';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Line } from 'react-chartjs-2';
function DashboardCard03() {
  const [atmosphericPressure, setAtmosphericPressure] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [list, setList] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3000/pressure')
      .then(response => {
        if (!response.data.pressure) {
          
          throw new Error('Pressure data not available');
        }
        setAtmosphericPressure(response.data.pressure);
      })
      .catch(error => console.error('Error fetching atmospheric pressure:', error));
      axios.get('http://localhost:3000/list/pressure')
      .then(response => {
        if (!response.data || typeof response.data.pressure === 'undefined') {
          
          throw new Error('pressure data not available or not in correct format');
        }
  
        const { pressure } = response.data;
        setList(pressure); // Utilisation de setList pour mettre à jour list
      })
      .catch(error => console.error('Error fetching pressure:', error));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ?  '#E5EAEA' : '#E5EAEA';

  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div id="DashboardCard03" 
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
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
    <div className=" p-2 flex justify-center bg-slate-200 flex-grow max-h-[400px] xl:max-h-[400px]">
            <button onClick={() => console.log(list.map(entry => entry.time))}>button </button>
            <Line
  data={{
    labels: list.map((entry, index) => index), // Utilisation de l'index comme label
    datasets: [{
      label: 'pressure',
      data: list.map(entry => entry.pressure),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }}
/>
</div>
    </div>
    </div>
  );
}

export default DashboardCard03;
