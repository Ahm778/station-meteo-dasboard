import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome'; // Importez le composant Welcome
import Dashboard from './pages/Dashboard'; // Importez le composant Dashboard
import './css/style.css';
import DashboardCard01 from './partials/dashboard/DashboardCard01'; 
import DashboardCard02 from './donnees/dashboard/DashboardCard02'; // Import DashboardCard02
import DashboardCard03 from './donnees/dashboard/DashboardCard03'; 
import DashboardCard04 from './donnees/dashboard/DashboardCard04'; 
import DashboardCard05 from './donnees/dashboard/DashboardCard05'; 
import DashboardCard06 from './donnees/dashboard/DashboardCard06'; 
import DashboardCard07 from './donnees/dashboard/DashboardCard07'; 
import DashboardCard08 from './donnees/dashboard/DashboardCard08'; 
import DashboardCard09 from './donnees/dashboard/DashboardCard09'; 
import DashboardCard12 from './donnees/dashboard/DashboardCard12'; 
import DashboardCard11 from './donnees/dashboard/DashboardCard11'; 
import DashboardCard14 from './donnees/dashboard/DashboardCard14';
import DashboardCard15 from './donnees/dashboard/DashboardCard15';
import DashboardCard16 from './donnees/dashboard/DashboardCard16';
import About from './components/About/About';

import Preloader from "./components/preloader/Preloader";
// Create a context
const ThemeContext = React.createContext();

function App() {
  const [load, updateLoad] = useState(true);
  // Assuming you have a state for theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Provide the context value to the components
    <ThemeContext.Provider value={{ theme }}>
    <div className={`${theme} app`} style={{ backgroundColor: '#ffffff' }}>
    <>
    <Preloader load={load} />
      <Routes>
        <Route exact path="/" element={<Welcome />} /> {/* Utilisez Welcome comme route pour la page d'accueil */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ajoutez la route pour le Dashboard */}
        {/* Ajoutez vos autres routes ici */}
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/temperature" element={<DashboardCard14 />} />
        <Route path="/Dashboard/humidity" element={<DashboardCard02 />} /> {/* Use DashboardCard02 here */}
        <Route path="/Dashboard/pressure" element={<DashboardCard03 />} />
        <Route path="/Dashboard/lumière" element={<DashboardCard04 />} />
        <Route path="/couleur" element={<DashboardCard05 />} />
        <Route path="/air" element={<DashboardCard06 />} />
        <Route path="/eau" element={<DashboardCard07 />} />
        <Route path="/co2" element={<DashboardCard08 />} />
        <Route path="/gps" element={<DashboardCard12 />} />
        <Route path="/configuration" element={<DashboardCard11 />} />
        <Route path="/voc" element={<DashboardCard09 />} />
        <Route path="/about" element={<About />} />
        <Route path="/temperature_stm" element={<DashboardCard15/>} />
        <Route path="/Dashboard/hum" element={<DashboardCard16 />} />
      </Routes>
    </>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
