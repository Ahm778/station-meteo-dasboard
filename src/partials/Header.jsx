import aa from "../Assets/aa.jpeg";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import ThemeToggle from '../components/ThemeToggle';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 border-b border-slate-200 dark:border-slate-700 z-30 transition duration-500 ${scrollY > 20 ? 'bg-[#182235]' : 'bg-white dark:bg-[#182235]'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex items-center space-x-3">
            <div>
              <img
                src={aa}
                className="h-14"
                alt="Logo"
              />
            </div>
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3 ml-auto">
  <nav className="hidden lg:flex space-x-14">
    <Link to="/" className="nav-link" style={{ fontWeight: "bold" }}>Home</Link>
    <Link to="/Dashboard" className="nav-link" style={{ fontWeight: "bold" }}>Dashboard</Link>
    <Link to="/about" className="nav-link" style={{ fontWeight: "bold" }}>About</Link>
    <a href="" className="nav-link" style={{ fontWeight: "bold" }}>Blogs</a>
  </nav>
</div>


          {/* Help, Notifications, and ThemeToggle */}
          <div className="flex items-center space-x-8  ml-auto">
          <Notifications align="right" />
            <Help align="right" />
            <ThemeToggle />
          </div>
          
        </div>
      </div>
      <style>{`
        .nav-link {
          position: relative;
          color: var(--clr-txt);
          text-decoration: none;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 5px; /* Hauteur du soulignement */
          bottom: -2px; /* Ajustez ici pour définir la position du soulignement */
          left: 0;
          background-color: transparent; /* Couleur du soulignement */
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.4s ease-in-out;
        }

        .nav-link:hover::after {
          visibility: visible;
          background-color: var(--clr-primary); /* Couleur du soulignement au survol */
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}

export default Header;
