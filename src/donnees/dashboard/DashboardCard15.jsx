import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function DashboardCard14() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/temperature_st')
      .then(response => {
        if (!response.data || typeof response.data.temperature_st === 'undefined') {
          throw new Error('temperature data not available or not in correct format');
        }

        const { temperature_st } = response.data;
        setTemperature(temperature_st);
      })
      .catch(error => console.error('Error fetching temperature:', error));

    axios.get('http://localhost:3000/list/temperature_st')
      .then(response => {
        if (!response.data || typeof response.data.temperature_st === 'undefined') {
          throw new Error('temperature list data not available or not in correct format');
        }

        const { temperature_st } = response.data;
        setList(temperature_st);
      })
      .catch(error => console.error('Error fetching temperature list:', error));
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div id="DashboardCard15" className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 ${isHovered ? 'bg-gray-200 dark:bg-slate-800' : 'bg-gray-200'}`}
          style={{ backgroundColor: isHovered ? 'rgb(192, 210, 225)' : '#E5EAEA' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-5 pt-3">
            <header className="flex justify-between items-start mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 0 24 24" width="30" height="30" className="mr-0">
                <path d="M16.5 22C18.7091 22 20.5 20.2091 20.5 18C20.5 16.9335 20.0827 15.9646 19.4024 15.2475C18.8957 14.7134 18.6423 14.4463 18.5712 14.2679C18.5 14.0895 18.5 13.8535 18.5 13.3815V4C18.5 2.89543 17.6046 2 16.5 2C15.3954 2 14.5 2.89543 14.5 4V13.3815C14.5 13.8535 14.5 14.0895 14.4288 14.2679C14.3577 14.4463 14.1043 14.7134 13.5976 15.2475C12.9173 15.9646 12.5 16.9335 12.5 18C12.5 20.2091 14.2909 22 16.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.3133 15.8303C8.67792 15.5416 7.36329 14.104 7.20333 12.2607C7.01373 10.076 8.51806 8.14861 10.5634 7.95588C10.883 7.92576 11.197 7.9398 11.5 7.99327M10.2201 4L10.323 5.18677M6.04201 7.57572L5.18359 6.81058M4.611 12.505L3.5 12.6097M6.86776 17.0868L6.15499 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>
              Weather Dashboard
            </h2>

            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">Temperature</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{temperature !== null ? `${temperature}°C` : 'N/A'}</div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-grow max-h-[128px] xl:max-h-[128px]">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '40px' }}>
              <GaugeChart
                id="gauge-chart1"
                nrOfLevels={30}
                percent={temperature !== null ? (temperature + 50) / 130 : 0}
                needleValue={temperature}
                textColor="#000"
                colors={['#FF5F6D', '#FFC371', '#47B39C']}
                arcWidth={0.3}
                needleColor="#345243"
                formatTextValue={() => `${temperature !== null ? temperature : 'N/A'}°C`}
              />
            </div>
          </div>
          <div className="p-2 flex justify-center flex-grow max-h-[400px] xl:max-h-[400px]">
            <Line
              data={{
                labels: list.map((entry, index) => index), // Use index as label
                datasets: [{
                  label: 'Temperature over Time',
                  data: list.map(entry => entry.temperature_st),
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.5
                }]
              }}
              options={{
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: true,
                      text: 'Time'
                    }
                  },
                  y: {
                    display: true,
                    title: {
                      display: true,
                      text: 'Temperature (°C)'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard14;
