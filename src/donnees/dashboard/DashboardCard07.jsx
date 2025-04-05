
import React, { useState, useEffect } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Speedometer from 'react-d3-speedometer';

function DashboardCard03() {
  const [waterLevel, setWaterLevel] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [list, setList] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Ajoutez cette ligne pour initialiser l'état de la barre latérale

  useEffect(() => {
    axios.get('http://localhost:3000/co2')
      .then(response => {
        if (!response.data || typeof response.data.co2 === 'undefined') {
          
          throw new Error('co2 data not available or not in correct format');
        }
        setWaterLevel(response.data.co2); // Utilisez setWaterLevel pour mettre à jour l'état du niveau d'eau
      })
      .catch(error => console.error('Error fetching water level:', error));

    axios.get('http://localhost:3000/list/co2')
      .then(response => {
        if (!response.data || typeof response.data.co2 === 'undefined') {
          
          throw new Error('co2 data not available or not in correct format');
        }
        setList(response.data.co2);
      })
      .catch(error => console.error('Error fetching co2 list:', error));
  }, []);

  const maxWaterLevel = 100; // Ajoutez cette ligne pour définir la valeur maximale du niveau d'eau
  const segmentHeight = (waterLevel / maxWaterLevel) * 100;

  // Gestion du survol pour changer la couleur de fond
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Détermination de la couleur de fond en fonction de l'état du survol
  const backgroundColor = isHovered ? 'rgb(192, 210, 225)' : '#E5EAEA';

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div
          id="DashboardCard08"
          className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor }}
        >
          <div className="px-5 pt-3 flex flex-col">
            <header className="flex justify-between items-start mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<path fill="currentColor" d="M11.077 14.692q-.31 0-.54-.23t-.23-.539v-3.846q0-.31.23-.54t.54-.23h2.846q.31 0 .54.23t.23.54v3.846q0 .31-.23.54t-.54.23zm.115-.884h2.616v-3.616h-2.616zm6.116 3.442v-1.866q0-.309.23-.539t.539-.23h2.23v-1.423h-2.582q-.165 0-.291-.126t-.126-.316q0-.165.126-.304q.125-.138.316-.138h2.673q.31 0 .54.23t.23.539v1.538q0 .31-.23.54t-.54.23h-2.23v1.423h2.557q.166 0 .304.138q.138.139.138.304q0 .19-.138.316t-.304.126h-3q-.19 0-.316-.126t-.126-.316M4.077 14.692q-.329 0-.549-.22t-.22-.549v-3.846q0-.31.22-.54t.549-.23h2.846q.31 0 .54.23t.23.54v.833q0 .184-.14.3q-.137.117-.303.117q-.19 0-.316-.126t-.126-.316v-.693H4.192v3.616h2.616v-.692q0-.166.126-.304q.126-.139.316-.139q.166 0 .304.139q.138.138.138.304v.807q0 .329-.23.549t-.539.22z" />
</svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>carbon dioxide C02</h2>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1"> CO2 Level (ppm)</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{waterLevel} ppm</div>
            </div>
            <div className="flex justify-center items-center mt-0">
            <div className="h-24 w-8 bg-gradient-to-t from-yellow-500 to-yellow-800 rounded-lg relative mx-auto">
  <div className="absolute bottom-0 left-0 right-0 bg-yellow-900" style={{ height: `${segmentHeight}%`, borderRadius: '4px' }} />
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
    <div className="w-1 h-4 bg-orange-500"></div>
  </div>
  {Array.from({ length: 11 }).map((_, i) => (
    <div key={i} className="absolute bottom-0 left-0 right-0 h-full" style={{ bottom: `${i * 10}%` }}>
      <div className="w-px bg-gray-400 dark:bg-gray-600" />
    </div>
  ))}
</div>

            </div>
          </div>
          <div className="p-2 flex justify-center flex-grow max-h-[400px] xl:max-h-[400px]">
            <Line
              data={{
                labels: list.map((entry, index) => index),
                datasets: [{
                  label: 'co2',
                  data: list.map(entry => entry.co2),
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
