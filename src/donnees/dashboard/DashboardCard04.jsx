import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import EditMenu from '../../components/DropdownEditMenu';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Line } from 'react-chartjs-2';
function DashboardCard05() {
  const [lightIntensity, setLightIntensity] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [list, setList] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3000/lightIntensity')
      .then(response => {
        if (!response.data.lightIntensity) {
          
          throw new Error('Pressure data not available');
        }
        setLightIntensity(response.data.lightIntensity);
      })
      .catch(error => console.error('Error fetching lightIntensity:', error));
      axios.get('http://localhost:3000/list/lightIntensity')
      .then(response => {
        if (!response.data || typeof response.data.lightIntensity === 'undefined') {
          
          throw new Error('lightIntensity data not available or not in correct format');
        }
  
        const { lightIntensity } = response.data;
        setList(lightIntensity); // Utilisation de setList pour mettre à jour list
      })
      .catch(error => console.error('Error fetching lightIntensity:', error));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? '#E5EAEA' : '#E5EAEA';
  const gaugeColor = '#FF6E40'; // Rose flamingo

  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div 
      id="DashboardCard05" 
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor }}
    >
      <div className="px-5 pt-3">
        <header className="flex justify-between items-start mb-2">

        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="mr-4">
                                  <rect width="24" height="24" fill="none" />
                                  <rect width="24" height="24" fill="none" />
                                  <path fill="currentColor" d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41z" />
                                </svg>
         
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Data 1 sensor</h2>
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">LIGHT INTENSITY (LUX)</div>
        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">{lightIntensity} lux</div>
        <div className="flex flex-col items-center">
          <div style={{ width: '100px', marginBottom: '10px' }}>
            <CircularProgressbar
              value={lightIntensity}
              text={`${lightIntensity} LUX`}
              styles={{
                path: {
                  stroke: gaugeColor,
                },
                text: {
                  fill: gaugeColor,
                },
              }}
            />
          </div>
        </div>
        <div className=" p-2 flex justify-center  flex-grow max-h-[400px] xl:max-h-[400px]">
            <button onClick={() => console.log(list.map(entry => entry.time))}>button </button>
            <Line
  data={{
    labels: list.map((entry, index) => index), // Utilisation de l'index comme label
    datasets: [{
      label: 'lightIntensity',
      data: list.map(entry => entry.lightIntensity),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5
    }]
  }}
/>

          </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default DashboardCard05;
