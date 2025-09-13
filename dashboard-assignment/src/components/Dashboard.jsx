import React, { useState, useReducer } from "react";
import { initialDashboardData, widgetReducer } from "../data/dashboardData";
import { Header } from "./layout/Header";
import { DashboardHeader } from "./layout/DashboardHeader";
import { WidgetCard } from "./widgets/WidgetCard";
import { AddWidgetButton } from "./widgets/AddWidgetButton";
import { AddWidgetModal } from "./modals/AddWidgetModal";

export const Dashboard = () => {
  const [dashboardData, dispatch] = useReducer(
    widgetReducer,
    initialDashboardData
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddWidget = (categoryName, widget) => {
    dispatch({ type: "ADD_WIDGET", categoryName, widget });
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch({ type: "REMOVE_WIDGET", categoryName, widgetId });
  };

  const filterWidgets = (widgets) => {
    if (!searchTerm) return widgets;
    return Object.entries(widgets).reduce((filtered, [key, widget]) => {
      if (widget.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered[key] = widget;
      }
      return filtered;
    }, {});
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header with search */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="px-6 py-6">
        {/* Dashboard Header (buttons) */}
        <DashboardHeader onAddWidget={() => setIsModalOpen(true)} />

        {/* Dashboard Categories */}
        {Object.entries(dashboardData.categories).map(
          ([categoryName, category]) => (
            <div key={categoryName} className="mb-10">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                {categoryName}
              </h2>

              {/* Shadow Background Wrapper */}
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Object.values(filterWidgets(category.widgets)).map(
                    (widget) => (
                      <WidgetCard
                        key={widget.id}
                        widget={widget}
                        onRemove={handleRemoveWidget}
                        categoryName={categoryName}
                      />
                    )
                  )}
                  <AddWidgetButton onClick={() => setIsModalOpen(true)} />
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Add Widget Modal */}
      <AddWidgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddWidget={handleAddWidget}
        dashboardData={dashboardData}
      />
    </div>
  );
};

export default Dashboard;
