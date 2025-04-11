
import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { motion } from 'framer-motion';

function DashboardCard03() {
 const [iaqValue, setIaqValue] = useState(0);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
 const fetchData = async () => {
 try {
 const response = await axios.get('http://localhost:3000/iaq');
 if (!response.data?.iaq) throw new Error('IAQ data not available');
 setIaqValue(response.data.iaq);
 } catch (error) {
 console.error('Error fetching IAQ:', error);
 }
 };

 fetchData();
 const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
 return () => clearInterval(interval);
 }, []);

 const getIaqColor = (value) => {
 if (value < 30) return '#4CAF50'; // Excellent (green)
 if (value < 60) return '#FFC107'; // Good (yellow)
 if (value < 80) return '#FF9800'; // Moderate (orange)
 return '#F44336'; // Poor (red)
 };

 const getIaqStatus = (value) => {
 if (value < 30) return 'Excellent';
 if (value < 60) return 'Good';
 if (value < 80) return 'Moderate';
 return 'Poor';
 };

 return (
 <motion.div 
 className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 rounded-xl overflow-hidden border border-slate-200"
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}
 initial={{ opacity: 0, y: 20 }}
 animate={{ 
 opacity: 1, 
 y: 0,
 boxShadow: isHovered ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
 }}
 transition={{ duration: 0.3 }}
 style={{
 background: 'linear-gradient(145deg, #f8fafc, #f1f5f9)'
 }}
 >
 <div className="px-5 pt-3">
 <header className="flex justify-between items-start mb-3">
 <motion.div
 animate={isHovered ? { rotate: 15, scale: 1.1 } : { rotate: 0, scale: 1 }}
 transition={{ type: 'spring', stiffness: 300 }}
 >
 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#005F6A" strokeWidth="2">
 <path d="M2 5.94145C5.5 9.37313 10.5755 7.90241 11.7324 5.94145C11.9026 5.65301 12 5.31814 12 4.96096C12 3.87795 11.1046 3 10 3C8.89543 3 8 3.87795 8 4.96096" />
 <path d="M17 8.92814C17 7.31097 18.1193 6 19.5 6C20.8807 6 22 7.31097 22 8.92814C22 9.6452 21.7799 10.3021 21.4146 10.8111C19.3463 14.1915 9.2764 12.9164 4 11.8563" />
 <path d="M13.0854 19.8873C13.2913 20.5356 13.8469 21 14.5 21C15.3284 21 16 20.2528 16 19.331C16 19.0176 15.9224 18.7244 15.7873 18.4738C14.4999 15.9925 7.99996 14.3239 2 18.7746" />
 <path d="M19 15.5H21" strokeLinejoin="round" />
 </svg>
 </motion.div>
 </header>

 <h2 className="text-xl font-bold mb-1 text-slate-800">Air Quality Monitor</h2>
 <div className="text-sm font-medium text-slate-600 mb-4">Indoor Air Quality (IAQ)</div>
 </div>

 <div className="flex flex-col items-center px-5 pb-4">
 <div className="relative w-44 h-44 mb-3">
 <CircularProgressbarWithChildren
 value={iaqValue}
 minValue={0}
 maxValue={100}
 styles={buildStyles({
 pathColor: getIaqColor(iaqValue),
 trailColor: '#e2e8f0',
 pathTransitionDuration: 1.5,
 strokeLinecap: 'round'
 })}
 >
 <div className="text-center">
 <motion.div 
 className="text-4xl font-bold"
 style={{ color: getIaqColor(iaqValue) }}
 animate={{
 scale: [1, 1.05, 1]
 }}
 transition={{
 duration: 2,
 repeat: Infinity
 }}
 >
 {iaqValue}
 </motion.div>
 <div className="text-sm font-medium mt-1" style={{ color: getIaqColor(iaqValue) }}>
 {getIaqStatus(iaqValue)}
 </div>
 </div>
 </CircularProgressbarWithChildren>
 </div>

 <div className="w-full mt-4">
 <div className="flex justify-between text-xs text-slate-500 mb-1">
 <span>0</span>
 <span>30</span>
 <span>60</span>
 <span>80</span>
 <span>100</span>
 </div>
 <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
 <motion.div 
 className="absolute h-full rounded-full"
 style={{
 width: `${iaqValue}%`,
 background: `linear-gradient(to right, #4CAF50, #FFC107, #FF9800, #F44336)`
 }}
 initial={{ width: 0 }}
 animate={{ width: `${iaqValue}%` }}
 transition={{ duration: 1.5 }}
 />
 </div>
 <div className="flex justify-between mt-1 text-xs">
 <span className="text-green-500">Excellent</span>
 <span className="text-yellow-500">Good</span>
 <span className="text-orange-500">Moderate</span>
 <span className="text-red-500">Poor</span>
 </div>
 </div>
 </div>

 {/* Animated status indicator */}
 <motion.div 
 className="h-2 w-full"
 style={{ backgroundColor: getIaqColor(iaqValue) }}
 animate={{
 opacity: [0.6, 1, 0.6]
 }}
 transition={{
 duration: 2,
 repeat: Infinity
 }}
 />
 </motion.div>
 );
}

export default DashboardCard03;