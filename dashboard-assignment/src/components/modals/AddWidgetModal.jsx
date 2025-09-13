import React, { useState } from "react";
import { X } from "lucide-react";

export const AddWidgetModal = ({
  isOpen,
  onClose,
  onAddWidget,
  dashboardData,
}) => {
  const [activeTab, setActiveTab] = useState("CSPM");
  const [selectedWidgets, setSelectedWidgets] = useState({});
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [targetCategory, setTargetCategory] = useState(
    "CSPM Executive Dashboard"
  );

  const tabs = ["CSPM", "CWPP", "Image", "Ticket"];

  const getAllWidgets = () => {
    const allWidgets = [];
    Object.entries(dashboardData.categories).forEach(
      ([categoryName, category]) => {
        Object.values(category.widgets).forEach((widget) => {
          allWidgets.push({
            ...widget,
            categoryName,
            isSelected:
              selectedWidgets[`${categoryName}-${widget.id}`] || false,
          });
        });
      }
    );
    return allWidgets;
  };

  const handleWidgetToggle = (categoryName, widgetId) => {
    const key = `${categoryName}-${widgetId}`;
    setSelectedWidgets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddNewWidget = () => {
    if (newWidgetName.trim() && newWidgetText.trim()) {
      const newWidget = {
        id: `widget-${Date.now()}`,
        name: newWidgetName,
        text: newWidgetText,
      };
      onAddWidget(targetCategory, newWidget);
      setNewWidgetName("");
      setNewWidgetText("");
      setShowAddForm(false);
    }
  };

  const handleConfirm = () => {
    Object.entries(selectedWidgets).forEach(([key, isSelected]) => {
      if (isSelected) {
        const [categoryName, widgetId] = key.split("-");
        const widget = dashboardData.categories[categoryName].widgets[widgetId];
        if (widget && categoryName !== targetCategory) {
          onAddWidget(targetCategory, {
            ...widget,
            id: `${widget.id}-copy-${Date.now()}`,
          });
        }
      }
    });
    setSelectedWidgets({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-1/2 h-full flex flex-col shadow-2xl">
        <div className="bg-blue-900 text-white p-4 flex justify-between items-center flex-shrink-0">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Personalise your dashboard by adding the following widget
            </p>

            <div className="flex border-b mb-6 sticky top-0 bg-white z-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {getAllWidgets().map((widget) => (
                <div
                  key={`${widget.categoryName}-${widget.id}`}
                  className="flex items-center p-4 hover:bg-gray-50 rounded-lg border border-gray-100"
                >
                  <input
                    type="checkbox"
                    id={`${widget.categoryName}-${widget.id}`}
                    checked={
                      selectedWidgets[`${widget.categoryName}-${widget.id}`] ||
                      false
                    }
                    onChange={() =>
                      handleWidgetToggle(widget.categoryName, widget.id)
                    }
                    className="mr-4 w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`${widget.categoryName}-${widget.id}`}
                    className="flex-1 text-sm text-gray-700 cursor-pointer font-medium"
                  >
                    {widget.name}
                  </label>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {widget.categoryName}
                  </span>
                </div>
              ))}
            </div>

            {showAddForm ? (
              <div className="border-t pt-6 mt-6">
                <h3 className="font-semibold mb-4 text-lg">Add New Widget</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={targetCategory}
                    onChange={(e) => setTargetCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {Object.keys(dashboardData.categories).map(
                      (categoryName) => (
                        <option key={categoryName} value={categoryName}>
                          {categoryName}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Widget Name
                  </label>
                  <input
                    type="text"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter widget name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Widget Text
                  </label>
                  <textarea
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter widget text"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleAddNewWidget}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                  >
                    Add Widget
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="border-t pt-6">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="text-blue-600 text-sm hover:text-blue-700 font-medium"
                >
                  + Add New Widget
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="border-t p-6 flex justify-end gap-3 flex-shrink-0 bg-white">
          <button
            onClick={onClose}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 text-sm border border-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-8 py-3 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
