import React, { useState, useEffect } from 'react';
import Speedometer from 'react-d3-speedometer';
import EditMenu from '../../components/DropdownEditMenu';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Line } from 'react-chartjs-2';

function DashboardCard03() {



  
  const [humidity, setHumidity] = useState(null);
  const [list, setList] = useState([]); 
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:3000/humidity')
      .then(response => {
        if (!response.data || typeof response.data.humidity === 'undefined') {
          
          throw new Error('humidity data not available or not in correct format');
        }
        const { humidity } = response.data;
        setHumidity(humidity);
      })
      .catch(error => console.error('Error fetching humidity:', error));
    axios.get('http://localhost:3000/list/humidity')
      .then(response => {
        if (!response.data || typeof response.data.humidity === 'undefined') {
          
          throw new Error('humidity data not available or not in correct format');
        }
  
        const { humidity } = response.data;
        setList(humidity); // Utilisation de setList pour mettre à jour list
      })
      .catch(error => console.error('Error fetching humidity:', error));
  }, []);

  const gaugeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const gaugeColors = {
    startColor: '#81C784',
    endColor: '#4CAF50',
    needleColor: '#388E3C',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? '#E5EAEA': '#E5EAEA';

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700`}
          style={{ backgroundColor }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-5 pt-3">
            <header className="flex justify-between items-start mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="5 3.2 25 25" className="mr-0">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.044A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007M16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001" />
              </svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Weather Dashboard</h2>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Humidity</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{humidity}%</div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow max-h-[128px] xl:max-h-[128px]">
            <div style={gaugeContainerStyle}>
              <Speedometer
                value={humidity !== null ? humidity : 0}
                minValue={0}
                maxValue={100}
                width={200}
                height={150}
                ringWidth={20}
                needleHeightRatio={0.7}
                currentValueText={humidity !== null ? humidity + '%' : 'N/A'}
                startColor={gaugeColors.startColor}
                endColor={gaugeColors.endColor}
                needleColor={gaugeColors.needleColor}
              />
            </div>
          </div>
          <div className=" p-2 flex justify-center  flex-grow max-h-[400px] xl:max-h-[400px]">
            <button onClick={() => console.log(list.map(entry => entry.time))}>button </button>
            <Line
  data={{
    labels: list.map((entry, index) => index), // Utilisation de l'index comme label
    datasets: [{
      label: 'humidity',
      data: list.map(entry => entry.humidity),
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
  );
}

export default DashboardCard03;
