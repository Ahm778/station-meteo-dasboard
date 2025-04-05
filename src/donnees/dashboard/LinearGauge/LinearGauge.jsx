// LinearGauge.jsx

import React from 'react';
import './LinearGauge.css';

function LinearGauge({ value, min, max }) {
  const calculatePercentage = () => {
    return ((value - min) / (max - min)) * 100;
  };

  const valuePosition = {
    left: `calc(${calculatePercentage()}% - 10px)`
  };

  return (
    <div className="linear-gauge">
      <div className="linear-gauge-bar">
        <div
          className="linear-gauge-tick"
          style={{ left: `${calculatePercentage()}%` }}
        ></div>
      </div>
      <div className="linear-gauge-value" style={valuePosition}>
        {value} hPa
      </div>
    </div>
  );
}

export default LinearGauge;
