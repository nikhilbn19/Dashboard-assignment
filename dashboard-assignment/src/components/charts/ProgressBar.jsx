import React from "react";

export const ProgressBar = ({
  total,
  label,
  segments,
  gradient = "from-red-600 via-yellow-500 to-gray-400",
}) => (
  <div>
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold text-gray-800">{total}</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`bg-gradient-to-r ${gradient} h-2 rounded-full`} />
      </div>
    </div>
    <div className="flex justify-between text-xs text-gray-600">
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-2 h-2 ${segment.color} rounded-full mr-1`}></div>
          <span>{segment.label}</span>
        </div>
      ))}
    </div>
  </div>
);
