import React, { useState, useEffect } from 'react';
import Speedometer from 'react-d3-speedometer';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function DashboardCard03() {
  const [temperature_eau, setTemperatureEau] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [list, setList] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Déclaration de la variable sidebarOpen

  useEffect(() => {
    axios.get('http://localhost:3000/temperature_eau')
      .then(response => {
        if (!response.data || typeof response.data.temperature_eau === 'undefined') {
          
          throw new Error('temperature_eau data not available or not in correct format');
        }
        setTemperatureEau(response.data.temperature_eau);
      })
      .catch(error => console.error('Error fetching temperature_eau:', error));

    axios.get('http://localhost:3000/list/temperature_eau')
      .then(response => {
        if (!response.data || typeof response.data.temperature_eau === 'undefined') {
          
          throw new Error('temperature_eau data not available or not in correct format');
        }
        setList(response.data.temperature_eau);
      })
      .catch(error => console.error('Error fetching temperature_eau list:', error));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? 'rgb(192, 210, 225)' : '#E5EAEA';

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div
          id="DashboardCard07"
          className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor }}
        >
          {/* Contenu de la carte */}
          <div className="px-5 pt-3">
            <header className="flex justify-between items-start mb-2">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="4 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="currentColor" d="M13 15.28V5.5a1 1 0 0 0-2 0v9.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-6.42-2.2a4 4 0 0 1 1.1-3.76a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z" />
              </svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Water temperature_eau</h2>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Water temperature_eau (°C)</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{temperature_eau}&deg;C</div>
            </div>
          </div>
          {/* Jauge demi-circulaire */}
          <div className="flex justify-center items-center flex-grow max-h-[128px] xl:max-h-[128px]">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110%', marginTop: '40px' }}>
              <Speedometer
                value={temperature_eau !== null ? temperature_eau : 0}
                minValue={-50}
                maxValue={80}
                width={200}
                height={200}
                ringWidth={20}
                needleHeightRatio={0.7}
                currentValueText={temperature_eau !== null ? temperature_eau + '°C' : 'N/A'}
                startColor="#64B5F6"
                endColor="#0D47A1"
                needleColor="#212121"
                segments={5}
                segmentColors={['#1565C0', '#1976D2', '#1E88E5', '#64B5F6', '#B3E5FC']}
                currentValuePlaceholderStyle="color: #FFEB3B; font-size: 18px;"
              />
            </div>
          </div>
          {/* Graphique en ligne */}
          <div className="p-2 flex justify-center flex-grow max-h-[400px] xl:max-h-[400px]">
            <Line
              data={{
                labels: list.map((entry, index) => index),
                datasets: [{
                  label: 'temperature_eau',
                  data: list.map(entry => entry.temperature_eau),
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