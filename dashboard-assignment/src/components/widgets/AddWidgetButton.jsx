import React from "react";
import { Plus } from "lucide-react";

export const AddWidgetButton = ({ onClick }) => {
  return (
    <div
      className="bg-white rounded-lg border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <Plus size={24} className="mb-2" />
      <span className="text-sm font-medium">Add Widget</span>
    </div>
  );
};
