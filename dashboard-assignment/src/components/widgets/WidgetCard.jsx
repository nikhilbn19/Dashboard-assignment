import React from "react";
import { X } from "lucide-react";
import DonutChart from "../charts/DonutChart";
import MultiColorDonut from "../charts/MultiColorDonut";
import { ProgressBar } from "../charts/ProgressBar";
import { LegendItem } from "../charts/LegendItem";
import { NoDataPlaceholder } from "../common/NoDataPlaceholder";

export const WidgetCard = ({ widget, onRemove, categoryName }) => {
  const renderWidgetContent = () => {
    if (widget.id === "cloud-accounts") {
      return (
        <div className="flex flex-col items-center space-y-4">
          <DonutChart percentage={50} total="2" label="Total" thickness={4} />
          <div className="flex flex-col space-y-2">
            <LegendItem color="bg-blue-500" label="Connected (2)" />
            <LegendItem color="bg-blue-200" label="Not Connected (2)" />
          </div>
        </div>
      );
    }

    if (widget.id === "cloud-risk-assessment") {
      const segments = [
        { color: "#dc2626", percentage: 15, offset: 0 }, // red
        { color: "#f59e0b", percentage: 10, offset: -15 }, // yellow
        { color: "#6b7280", percentage: 5, offset: -25 }, // gray
        { color: "#10b981", percentage: 70, offset: -30 }, // green
      ];

      return (
        <div className="flex items-center space-x-6">
          <MultiColorDonut total="9659" segments={segments} thickness={4} />
          <div className="flex-1 space-y-2">
            <LegendItem color="bg-red-600" label="Failed (1689)" />
            <LegendItem color="bg-yellow-500" label="Warning (681)" />
            <LegendItem color="bg-gray-400" label="Not available (36)" />
            <LegendItem color="bg-green-600" label="Passed (7253)" />
          </div>
        </div>
      );
    }
    if (widget.id === "image-risk-assessment") {
      const segments = [
        { color: "bg-red-600", label: "Critical (9)" },
        { color: "bg-yellow-500", label: "High (150)" },
      ];
      return (
        <ProgressBar
          total="1470"
          label="Total Vulnerabilities"
          segments={segments}
        />
      );
    }

    if (widget.id === "image-security-issues") {
      const segments = [
        { color: "bg-red-600", label: "Critical (2)" },
        { color: "bg-yellow-500", label: "High (2)" },
      ];
      return (
        <ProgressBar
          total="2"
          label="Total Images"
          segments={segments}
          gradient="from-red-600 to-yellow-500"
        />
      );
    }

    if (widget.text.includes("No Graph data available")) {
      return <NoDataPlaceholder />;
    }

    return (
      <div className="text-gray-600 text-sm whitespace-pre-line">
        {widget.text}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 relative shadow-sm min-h-[200px]">
      <button
        onClick={() => onRemove(categoryName, widget.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 w-4 h-4"
      >
        <X size={16} />
      </button>
      <h3 className="font-semibold text-sm text-gray-700 mb-4">
        {widget.name}
      </h3>
      {renderWidgetContent()}
    </div>
  );
};
