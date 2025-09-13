import React from "react";

const MultiColorDonut = ({ total, segments, thickness = 4 }) => (
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
      {/* Colored Segments */}
      {segments.map((segment, index) => (
        <path
          key={index}
          d="m18,2.0845 
             a 15.9155,15.9155 0 0,1 0,31.831 
             a 15.9155,15.9155 0 0,1 0,-31.831"
          fill="none"
          stroke={segment.color}
          strokeWidth={thickness}
          strokeDasharray={`${segment.percentage}, 100`}
          strokeDashoffset={segment.offset || 0}
        />
      ))}
    </svg>
    {/* Center text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-xl font-bold text-gray-800">{total}</span>
      <span className="text-sm text-gray-500">Total</span>
    </div>
  </div>
);

export default MultiColorDonut;
