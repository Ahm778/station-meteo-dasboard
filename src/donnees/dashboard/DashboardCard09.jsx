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
    axios.get('http://localhost:3000/voc')
      .then(response => {
        if (!response.data || typeof response.data.voc === 'undefined') {
          
          throw new Error('voc data not available or not in correct format');
        }
        setWaterLevel(response.data.voc); // Utilisez setWaterLevel pour mettre à jour l'état du niveau d'eau
      })
      .catch(error => console.error('Error fetching water level:', error));

    axios.get('http://localhost:3000/list/voc')
      .then(response => {
        if (!response.data || typeof response.data.voc === 'undefined') {
          
          throw new Error('voc data not available or not in correct format');
        }
        setList(response.data.voc);
      })
      .catch(error => console.error('Error fetching voc list:', error));
  }, []);

  const maxWaterLevel = 25; // Ajoutez cette ligne pour définir la valeur maximale du niveau d'eau
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
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<path fill="currentColor" d="m14.8 22.475l-.425-.95q-.2-.425-.288-.887T14 19.7q0-.55.125-1.087t.375-1.038q.2-.425.35-.862T15 15.8q0-.375-.088-.725t-.237-.7l-.35-.75l1.375-.6l.425.9q.2.425.288.9t.087.975q0 .55-.125 1.075T16 17.9q-.2.425-.35.875t-.15.925q0 .35.075.688t.225.662l.375.825zm3 0l-.425-.95q-.2-.425-.288-.887T17 19.7q0-.55.125-1.087t.375-1.038q.2-.425.35-.862T18 15.8q0-.375-.088-.725t-.237-.7l-.35-.75l1.375-.6l.425.9q.2.45.288.913t.087.962q0 .55-.125 1.075T19 17.9q-.2.425-.35.875t-.15.925q0 .35.075.688t.225.662l.375.825zm3 0l-.425-.95q-.2-.425-.288-.887T20 19.7q0-.55.125-1.087t.375-1.038q.2-.425.35-.862T21 15.8q0-.375-.088-.725t-.237-.7l-.35-.75l1.375-.6l.425.9q.2.425.288.9t.087.975q0 .55-.125 1.088T22 17.925q-.2.425-.35.863t-.15.912q0 .35.075.688t.225.662l.375.825zM4 13.8q0-2.5 1.988-5.437T12 2q2.95 2.5 4.788 4.75t2.637 4.275H14q-.825 0-1.412.588T12 13.025V22q-3.425 0-5.712-2.35T4 13.8" />
</svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>volatile organic compounds</h2>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1"> voc Level (ppb)</div>
            <div className="flex items-start">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{waterLevel} ppb</div>
            </div>
            <div className="flex justify-center items-center mt-0">
            <div className="h-24 w-8 bg-gradient-to-t from-green-500 to-green-800 rounded-lg relative mx-auto">
  <div className="absolute bottom-0 left-0 right-0 bg-green-900" style={{ height: `${segmentHeight}%`, borderRadius: '4px' }} />
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
    <div className="w-1 h-4 bg-red-500"></div>
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
                  label: 'voc',
                  data: list.map(entry => entry.voc),
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
