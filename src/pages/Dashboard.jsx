import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import Footerr from '../components//Footer'; // Ajout de l'import pour le Footer

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <FilterButton />
              <Datepicker />
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Add view</span>
              </button>                
            </div>
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard03 />
              <DashboardCard04 />
              <DashboardCard05 />
              <DashboardCard06 />
              <DashboardCard07 />
              <DashboardCard08 />
              <DashboardCard09 />
              <DashboardCard12 />
            </div>
          </div>
        </main>
        <Footerr /> {/* Ajout du composant Footer */}
      </div>
    </div>
  );
}

export default Dashboard;
