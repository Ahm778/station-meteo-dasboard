// DashboardCard05.jsx
import React from "react";
import Map from "../../components/Map";
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
function DashboardCard05() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div id="DashboardCard12" className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-gray-200 dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-1.5 -1 24 24" className="mr-4">
                                  <rect width="24" height="24" fill="none" />
                                  <path fill="currentColor" d="M18.913 2.9L2.632 9.226l4.829 2.006a5.767 5.767 0 0 1 3.118 3.119l2.006 4.828zm1.847.682l-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.923 1.923 0 0 1-1.11-1.067l-2.007-4.83a3.845 3.845 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53" />
                                </svg>   
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          La géolocalisation
        </h2>
      </header>
      <Map />
    </div>
    </div>
    </div>
  );
}

export default DashboardCard05;
