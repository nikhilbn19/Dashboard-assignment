import React from "react";

const DonutChart = ({ percentage = 50, total, label, thickness = 4 }) => (
  <div className="relative w-32 h-32">
    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
      {/* Background */}
      <path
        d="m18,2.0845 
           a 15.9155,15.9155 0 0,1 0,31.831 
           a 15.9155,15.9155 0 0,1 0,-31.831"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={thickness}
      />
      {/* Progress */}
      <path
        d="m18,2.0845 
           a 15.9155,15.9155 0 0,1 0,31.831 
           a 15.9155,15.9155 0 0,1 0,-31.831"
        fill="none"
        stroke="#3b82f6"
        strokeWidth={thickness}
        strokeDasharray={`${percentage}, 100`}
      />
    </svg>
    {/* Center text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-xl font-bold text-gray-800">{total}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  </div>
);

export default DonutChart;
