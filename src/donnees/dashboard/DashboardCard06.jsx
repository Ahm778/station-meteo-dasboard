import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Speedometer from 'react-d3-speedometer';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Line } from 'react-chartjs-2';

function DashboardCard03() {
  const [currentIAQValue, setCurrentIAQValue] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [list, setList] = useState([]); 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/iaq')
      .then(response => {
        if (!response.data || typeof response.data.iaq === 'undefined') {
          
          throw new Error('IAQ data not available or not in correct format');
        }
        const { iaq } = response.data;
        setCurrentIAQValue(iaq);
      })
      .catch(error => console.error('Error fetching IAQ:', error));

    axios.get('http://localhost:3000/list/iaq')
      .then(response => {
        if (!response.data || typeof response.data.iaq === 'undefined') {
          
          throw new Error('IAQ data not available or not in correct format');
        }
  
        const { iaq } = response.data;
        setList(iaq);
      })
      .catch(error => console.error('Error fetching IAQ list:', error));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? '#E5EAEA' : '#E5EAEA';

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div 
          id="DashboardCard03" 
          className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor }}
        >
          <div className="px-5 pt-3">
            <header className="flex justify-between items-start mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="mr-4">
                                  <path d="M2 5.94145C5.5 9.37313 10.5755 7.90241 11.7324 5.94145C11.9026 5.65301 12 5.31814 12 4.96096C12 3.87795 11.1046 3 10 3C8.89543 3 8 3.87795 8 4.96096" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M17 8.92814C17 7.31097 18.1193 6 19.5 6C20.8807 6 22 7.31097 22 8.92814C22 9.6452 21.7799 10.3021 21.4146 10.8111C19.3463 14.1915 9.2764 12.9164 4 11.8563" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M13.0854 19.8873C13.2913 20.5356 13.8469 21 14.5 21C15.3284 21 16 20.2528 16 19.331C16 19.0176 15.9224 18.7244 15.7873 18.4738C14.4999 15.9925 7.99996 14.3239 2 18.7746" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M19 15.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Indoor Air Quality Dashboard</h2>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">IAQ (Indoor Air Quality)</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{currentIAQValue}%</div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow max-sm:max-h-[128px] xl:max-h-[128px]">
          <Speedometer
  value={currentIAQValue}
  minValue={0}
  maxValue={100}
  width={200}
  height={120}
  needleColor="black"
  startColor="green"
  endColor="red"
  currentValueText={`${currentIAQValue}`}
/>
          </div>
          <div className="p-2 flex justify-center flex-grow max-h-[400px] xl:max-h-[400px]">
            <Line
              data={{
                labels: list.map((entry, index) => index),
                datasets: [{
                  label: 'IAQ',
                  data: list.map(entry => entry.iaq),
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
