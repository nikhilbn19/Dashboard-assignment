import React from "react";
import {
  Plus,
  RotateCcw,
  MoreVertical,
  Clock,
  ChevronDown,
} from "lucide-react";

export const DashboardHeader = ({ onAddWidget }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold text-gray-800">CNAPP Dashboard</h1>
      <div className="flex items-center space-x-3">
        <button
          onClick={onAddWidget}
          className="bg-white border border-gray-300 px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
        >
          <span>Add Widget</span>
          <Plus size={16} />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-800">
          <RotateCcw size={18} />
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-800">
          <MoreVertical size={18} />
        </button>
        <div className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded">
          <Clock size={16} className="text-blue-600" />
          <span className="text-sm text-gray-700">Last 2 days</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};
