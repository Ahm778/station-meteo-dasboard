import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Line } from 'react-chartjs-2';

function DashboardCard03() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [redList, setRedList] = useState([]);
  const [greenList, setGreenList] = useState([]);
  const [blueList, setBlueList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [redResponse, redListResponse, greenResponse, greenListResponse, blueResponse, blueListResponse] = await Promise.all([
          axios.get('http://localhost:3000/red'),
          axios.get('http://localhost:3000/list/red'),
          axios.get('http://localhost:3000/green'),
          axios.get('http://localhost:3000/list/green'),
          axios.get('http://localhost:3000/blue'),
          axios.get('http://localhost:3000/list/blue')
        ]);

        setRedValue(redResponse.data.red);
        setRedList(redListResponse.data.red);

        setGreenValue(greenResponse.data.green);
        setGreenList(greenListResponse.data.green);

        setBlueValue(blueResponse.data.blue);
        setBlueList(blueListResponse.data.blue);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartContainerRef.current.getContext('2d');
    const pastelColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, 0.7)`;
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['R', 'G', 'B'],
        datasets: [{
          label: '', // Titre vide
          data: [redValue, 0, 0], // Red Value
          backgroundColor: 'rgba(255, 0, 0, 0.7)', // Red color
          borderWidth: 2
        }, {
          label: '', // Titre vide
          data: [0, greenValue, 0], // Green Value
          backgroundColor: 'rgba(0, 255, 0, 0.7)', // Green color
          borderWidth: 2
        }, {
          label: '', // Titre vide
          data: [0, 0, blueValue], // Blue Value
          backgroundColor: 'rgba(0, 0, 255, 0.7)', // Blue color
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          title: { display: false }
        },
        scales: {
          x: { display: true, grid: { display: false } },
          y: { display: true, grid: { display: false }, ticks: { stepSize: 50 } }
        }
      }
    });
    

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [redValue, greenValue, blueValue]);

  useEffect(() => {
    const backgroundColor =  '#ffffff';
    document.getElementById("DashboardCard09").style.backgroundColor = backgroundColor;
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <div
          id="DashboardCard09"
          className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-md rounded-sm border border-slate-200 dark:border-slate-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor:  '#E5EAEA' }}
        >
          <div className="px-5 pt-3">
            <header className="flex justify-between items-start mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="#666060" d="M7.08 11.25A4.84 4.84 0 0 1 8 9.05L4.43 5.49A9.88 9.88 0 0 0 2 11.25zM9.05 8a4.84 4.84 0 0 1 2.2-.91V2a9.88 9.88 0 0 0-5.76 2.43zm3.7-6v5A4.84 4.84 0 0 1 15 8l3.56-3.56A9.88 9.88 0 0 0 12.75 2M8 15a4.84 4.84 0 0 1-.91-2.2H2a9.88 9.88 0 0 0 2.39 5.76zm3.25 1.92a4.84 4.84 0 0 1-2.2-.92l-3.56 3.57A9.88 9.88 0 0 0 11.25 22zM16 9.05a4.84 4.84 0 0 1 .91 2.2h5a9.88 9.88 0 0 0-2.39-5.76zM15 16a4.84 4.84 0 0 1-2.2.91v5a9.88 9.88 0 0 0 5.76-2.39zm1.92-3.25A4.84 4.84 0 0 1 16 15l3.56 3.56A9.88 9.88 0 0 0 22 12.75z" />
              </svg>
            </header>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2" style={{ color: '#005F6A' }}>Environmental Colors</h2>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase mb-1">RGB Color</div>
            <div className="flex items-start">
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Color:</span> {redValue}, {greenValue}, {blueValue}
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center flex-grow max-sm:max-h-[128px] xl:max-h-[128px] py-3"
            style={{ backgroundColor:  '#FFFFFF' }}
          >
            <canvas ref={chartContainerRef} />
          </div>
        </div>
        <div className="p-2 flex justify-center flex-grow max-h-[400px] xl:max-h-[400px]">
          <Line
            data={{
              labels: redList.map((entry, index) => index), // Using index as label
              datasets: [
                {
                  label: 'Red Value',
                  data: redList.map(entry => entry.red),
                  fill: false,
                  borderColor: 'rgb(255, 0, 0)',
                  tension: 0.5,
                },
                {
                  label: 'Green Value',
                  data: greenList.map(entry => entry.green),
                  fill: false,
                  borderColor: 'rgb(0, 255, 0)',
                  tension: 0.5,
                },
                {
                  label: 'Blue Value',
                  data: blueList.map(entry => entry.blue),
                  fill: false,
                  borderColor: 'rgb(0, 0, 255)',
                  tension: 0.5,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
