import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: [
      'Temperature (°C)',
      'Humidity (%)',
      'Atmospheric Pressure (hPa)',
      'Illuminance (lux)',
      'Color (RGB)',
      'Accelerometer (m/s²)',
      'IAQ',
      'Water Temperature (°C)',
      'Water Level (cm)'
    ],
    datasets: [
      {
        label: 'Sensor Data',
        data: [
          28, 75, 1013, 450, 255, 2.5, 1, 20, 50
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
          // Add more colors if needed
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
          // Add more colors if needed
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Sensor Data</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} segments={9} />
    </div>
  );
}

export default DashboardCard06;
