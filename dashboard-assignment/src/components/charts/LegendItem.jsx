import React from "react";

export const LegendItem = ({ color, label }) => (
  <div className="flex items-center">
    <div className={`w-3 h-3 ${color} rounded-full mr-2`}></div>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);
