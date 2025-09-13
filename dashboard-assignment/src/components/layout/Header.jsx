import React from "react";
import { Search } from "lucide-react";

export const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white border-b px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-blue-600 font-medium">Dashboard V2</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="w-6 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};
