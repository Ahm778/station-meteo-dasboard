// DashboardCard01.jsx
import React, { useState, useEffect } from 'react';
import Speedometer from 'react-d3-speedometer';
import EditMenu from '../../components/DropdownEditMenu';
import axios from 'axios';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function DashboardCard01() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [weatherCondition, setWeatherCondition] = useState('sunny');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [location, setLocation] = useState('Unknown Location');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/temperature');
        if (!response.data.temperature) {
          throw new Error('Données de température non disponibles');
        }
        setTemperature(response.data.temperature);
        setLastUpdated(new Date());
        
        // Simulation de conditions météo basées sur la température
        const temp = response.data.temperature;
        if (temp < 0) setWeatherCondition('snowy');
        else if (temp < 10) setWeatherCondition('cloudy');
        else if (temp < 20) setWeatherCondition('partly-cloudy');
        else setWeatherCondition('sunny');

        // Simulation de localisation (à remplacer par une vraie API si disponible)
        setLocation('Paris, FR');
      } catch (error) {
        console.error('Erreur lors de la récupération de la température :', error);
      }
    };
    
    fetchData();
    const interval = setInterval(fetchData, 30000); // Actualisation toutes les 30 secondes
    
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = () => {
    switch (weatherCondition) {
      case 'sunny':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="text-yellow-400">
            <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" fill="currentColor"/>
          </svg>
        );
      case 'partly-cloudy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="text-gray-400">
            <path d="M16 20a4 4 0 0 1-8 0H5a5 5 0 0 1-.42-9.97 6.5 6.5 0 0 1 11.9-1.43A4.5 4.5 0 0 1 21 14.5c0 .5-.06.99-.17 1.45A3.5 3.5 0 0 1 16 20zm-4-6a5 5 0 0 0 5-5 4 4 0 0 0-7.19-2.33l-.28.3-.3-.27A5.5 5.5 0 0 0 6.2 9.5l-.2.03V10a3 3 0 0 0 3 3h2z" fill="currentColor"/>
          </svg>
        );
      case 'cloudy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="text-gray-500">
            <path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.984 0A6 6 0 0 1 17 21zm0-2a4 4 0 1 0-.016-8 4 4 0 0 0 .016 8z" fill="currentColor"/>
          </svg>
        );
      case 'snowy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="text-blue-300">
            <path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.984 0A6 6 0 0 1 17 21zm0-2a4 4 0 1 0-.016-8 4 4 0 0 0 .016 8zM13 15v-2h-2v2H9v2h2v2h2v-2h2v-2h-2z" fill="currentColor"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 0 24 24" width="30" height="30" className="mr-0">
            <path d="M16.5 22C18.7091 22 20.5 20.2091 20.5 18C20.5 16.9335 20.0827 15.9646 19.4024 15.2475C18.8957 14.7134 18.6423 14.4463 18.5712 14.2679C18.5 14.0895 18.5 13.8535 18.5 13.3815V4C18.5 2.89543 17.6046 2 16.5 2C15.3954 2 14.5 2.89543 14.5 4V13.3815C14.5 13.8535 14.5 14.0895 14.4288 14.2679C14.3577 14.4463 14.1043 14.7134 13.5976 15.2475C12.9173 15.9646 12.5 16.9335 12.5 18C12.5 20.2091 14.2909 22 16.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.3133 15.8303C8.67792 15.5416 7.36329 14.104 7.20333 12.2607C7.01373 10.076 8.51806 8.14861 10.5634 7.95588C10.883 7.92576 11.197 7.9398 11.5 7.99327M10.2201 4L10.323 5.18677M6.04201 7.57572L5.18359 6.81058M4.611 12.505L3.5 12.6097M6.86776 17.0868L6.15499 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  const getTemperatureColor = () => {
    if (temperature === null) return 'text-slate-800 dark:text-slate-100';
    if (temperature < 0) return 'text-blue-500';
    if (temperature < 10) return 'text-cyan-500';
    if (temperature < 20) return 'text-amber-500';
    return 'text-orange-500';
  };

  const gaugeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: '40px',
  };

  const gaugeColors = {
    startColor: '#B2EBF2',
    endColor: '#FFEB3B',
    needleColor: '#FF5722',
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 ${
          isHovered ? 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900' : 'bg-gray-200 dark:bg-slate-900'
        }`}
          style={{ backgroundColor: isHovered ? 'rgb(192, 210, 225)' : '#E5EAEA' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl pointer-events-none" />
          )}

          <div className="px-5 pt-5">
            <header className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-3">
                {getWeatherIcon()}
                <div>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1" style={{ color: '#005F6A' }}>Weather Dashboard</h2>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{location}</div>
                </div>
              </div>
              <EditMenu align="right" className="relative inline-flex">
                <button className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 rounded-full">
                  <span className="sr-only">Edit</span>
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </EditMenu>
            </header>

            <div className="flex items-center justify-between mb-1">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-500 uppercase">Temperature</div>
              <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                {weatherCondition.replace('-', ' ')}
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div className={`text-3xl font-bold ${getTemperatureColor()} mr-2`}>
                {temperature !== null ? `${temperature}°C` : 'N/A'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                Updated {lastUpdated.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-grow max-h-[128px] xl:max-h-[128px] pb-4">
            <div style={gaugeContainerStyle}>
              <Speedometer
                value={temperature !== null ? temperature : 0}
                minValue={-50}
                maxValue={80}
                width={200}
                height={200}
                ringWidth={20}
                needleHeightRatio={0.7}
                needleTransition="easeElastic"
                needleTransitionDuration={2000}
                currentValueText={temperature !== null ? temperature + '°C' : 'N/A'}
                startColor={gaugeColors.startColor}
                endColor={gaugeColors.endColor}
                needleColor={gaugeColors.needleColor}
                segments={5}
                segmentColors={['#3B82F6', '#60A5FA', '#86CBFD', '#FDE68A', '#EF4444']}
                customSegmentStops={[-50, 0, 15, 30, 50, 80]}
                textColor="#64748B"
                valueTextFontWeight="bold"
                labelFontSize="12px"
                valueTextFontSize="18px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;