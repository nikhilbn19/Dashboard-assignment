// import React, { useState, useReducer } from "react";
// import {
//   X,
//   Plus,
//   Search,
//   RotateCcw,
//   MoreVertical,
//   Clock,
//   ChevronDown,
// } from "lucide-react";

// // Initial dashboard data matching the image
// const initialDashboardData = {
//   categories: {
//     "CSPM Executive Dashboard": {
//       id: "cspm",
//       widgets: {
//         "cloud-accounts": {
//           id: "cloud-accounts",
//           name: "Cloud Accounts",
//           text: "Connected (2)\nNot Connected (2)",
//         },
//         "cloud-risk-assessment": {
//           id: "cloud-risk-assessment",
//           name: "Cloud Account Risk Assessment",
//           text: "Failed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)\nTotal: 9659",
//         },
//       },
//     },
//     "CWPP Dashboard": {
//       id: "cwpp",
//       widgets: {
//         "namespace-alerts": {
//           id: "namespace-alerts",
//           name: "Top 5 Namespace Specific Alerts",
//           text: "No Graph data available!",
//         },
//         "workload-alerts": {
//           id: "workload-alerts",
//           name: "Workload Alerts",
//           text: "No Graph data available!",
//         },
//       },
//     },
//     "Registry Scan": {
//       id: "registry",
//       widgets: {
//         "image-risk-assessment": {
//           id: "image-risk-assessment",
//           name: "Image Risk Assessment",
//           text: "1470 Total Vulnerabilities\nCritical (9)\nHigh (150)",
//         },
//         "image-security-issues": {
//           id: "image-security-issues",
//           name: "Image Security Issues",
//           text: "2 Total Images\nCritical (2)\nHigh (2)",
//         },
//       },
//     },
//   },
// };

// // Widget reducer for state management
// const widgetReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_WIDGET":
//       return {
//         ...state,
//         categories: {
//           ...state.categories,
//           [action.categoryName]: {
//             ...state.categories[action.categoryName],
//             widgets: {
//               ...state.categories[action.categoryName].widgets,
//               [action.widget.id]: action.widget,
//             },
//           },
//         },
//       };
//     case "REMOVE_WIDGET":
//       const { [action.widgetId]: removed, ...remainingWidgets } =
//         state.categories[action.categoryName].widgets;
//       return {
//         ...state,
//         categories: {
//           ...state.categories,
//           [action.categoryName]: {
//             ...state.categories[action.categoryName],
//             widgets: remainingWidgets,
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };

// // Widget Component with enhanced visuals
// const Widget = ({ widget, onRemove, categoryName }) => {
//   const renderWidgetContent = () => {
//     if (widget.id === "cloud-accounts") {
//       return (
//         <div className="flex flex-col items-center space-y-4">
//           {/* Donut chart */}
//           <div className="relative w-32 h-32">
//             <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
//               <path
//                 d="m18,2.0845
//               a 15.9155,15.9155 0 0,1 0,31.831
//               a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#e5e7eb"
//                 strokeWidth="3"
//               />
//               <path
//                 d="m18,2.0845
//               a 15.9155,15.9155 0 0,1 0,31.831
//               a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#3b82f6"
//                 strokeWidth="3"
//                 strokeDasharray="50, 100"
//               />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <span className="text-xl font-bold text-gray-800">2</span>
//               <span className="text-sm text-gray-500">Total</span>
//             </div>
//           </div>

//           {/* Legend (vertical like in image) */}
//           <div className="flex flex-col space-y-2">
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-700">Connected (2)</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-700">Not Connected (2)</span>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (widget.id === "cloud-risk-assessment") {
//       return (
//         <div className="flex items-center space-x-4">
//           <div className="relative w-24 h-24">
//             {/* Donut chart */}
//             <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
//               <path
//                 d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#e5e7eb"
//                 strokeWidth="3"
//               />
//               <path
//                 d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#dc2626"
//                 strokeWidth="3"
//                 strokeDasharray="15, 100"
//               />
//               <path
//                 d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#f59e0b"
//                 strokeWidth="3"
//                 strokeDasharray="10, 100"
//                 strokeDashoffset="-15"
//               />
//               <path
//                 d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#10b981"
//                 strokeWidth="3"
//                 strokeDasharray="70, 100"
//                 strokeDashoffset="-25"
//               />
//               <path
//                 d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                 fill="none"
//                 stroke="#6b7280"
//                 strokeWidth="3"
//                 strokeDasharray="5, 100"
//                 strokeDashoffset="-95"
//               />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <span className="text-lg font-bold text-gray-800">9659</span>
//               <span className="text-xs text-gray-500">Total</span>
//             </div>
//           </div>
//           <div className="flex-1 space-y-1">
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-600">Failed (1689)</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-600">Warning (681)</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-600">Not available (36)</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
//               <span className="text-sm text-gray-600">Passed (7253)</span>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (widget.id === "image-risk-assessment") {
//       return (
//         <div>
//           <div className="mb-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-lg font-bold text-gray-800">1470</span>
//               <span className="text-sm text-gray-500">
//                 Total Vulnerabilities
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-gradient-to-r from-red-600 via-yellow-500 to-gray-400 h-2 rounded-full"
//                 style={{ width: "100%" }}
//               ></div>
//             </div>
//           </div>
//           <div className="flex justify-between text-xs text-gray-600">
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-red-600 rounded-full mr-1"></div>
//               <span>Critical (9)</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
//               <span>High (150)</span>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (widget.id === "image-security-issues") {
//       return (
//         <div>
//           <div className="mb-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-lg font-bold text-gray-800">2</span>
//               <span className="text-sm text-gray-500">Total Images</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-gradient-to-r from-red-600 to-yellow-500 h-2 rounded-full"
//                 style={{ width: "100%" }}
//               ></div>
//             </div>
//           </div>
//           <div className="flex justify-between text-xs text-gray-600">
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-red-600 rounded-full mr-1"></div>
//               <span>Critical (2)</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
//               <span>High (2)</span>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     // Default for alerts and other widgets
//     if (widget.text.includes("No Graph data available")) {
//       return (
//         <div className="flex flex-col items-center justify-center py-8 text-gray-400">
//           <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded mb-3 flex items-center justify-center">
//             <svg
//               className="w-8 h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//               ></path>
//             </svg>
//           </div>
//           <span className="text-sm">No Graph data available!</span>
//         </div>
//       );
//     }

//     // Default text display
//     return (
//       <div className="text-gray-600 text-sm whitespace-pre-line">
//         {widget.text}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 p-4 relative shadow-sm min-h-[200px]">
//       <button
//         onClick={() => onRemove(categoryName, widget.id)}
//         className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 w-4 h-4"
//       >
//         <X size={16} />
//       </button>
//       <h3 className="font-semibold text-sm text-gray-700 mb-4">
//         {widget.name}
//       </h3>
//       {renderWidgetContent()}
//     </div>
//   );
// };

// // Add Widget Button Component
// const AddWidgetButton = ({ onClick }) => {
//   return (
//     <div
//       className="bg-white rounded-lg border-2 border-dashed border-gray-200 p-8 flex flex-col items-center justify-center text-gray-400 hover:border-gray-300 cursor-pointer transition-colors"
//       onClick={onClick}
//     >
//       <Plus size={24} className="mb-2" />
//       <span className="text-sm font-medium">Add Widget</span>
//     </div>
//   );
// };

// // Add Widget Modal Component
// const AddWidgetModal = ({
//   isOpen,
//   onClose,
//   onAddWidget,
//   categories,
//   dashboardData,
// }) => {
//   const [activeTab, setActiveTab] = useState("CSPM");
//   const [selectedWidgets, setSelectedWidgets] = useState({});
//   const [newWidgetName, setNewWidgetName] = useState("");
//   const [newWidgetText, setNewWidgetText] = useState("");
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [targetCategory, setTargetCategory] = useState(
//     "CSPM Executive Dashboard"
//   );

//   const tabs = ["CSPM", "CWPP", "Image", "Ticket"];

//   const getAllWidgets = () => {
//     const allWidgets = [];
//     Object.entries(dashboardData.categories).forEach(
//       ([categoryName, category]) => {
//         Object.values(category.widgets).forEach((widget) => {
//           allWidgets.push({
//             ...widget,
//             categoryName,
//             isSelected:
//               selectedWidgets[`${categoryName}-${widget.id}`] || false,
//           });
//         });
//       }
//     );
//     return allWidgets;
//   };

//   const handleWidgetToggle = (categoryName, widgetId) => {
//     const key = `${categoryName}-${widgetId}`;
//     setSelectedWidgets((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const handleAddNewWidget = () => {
//     if (newWidgetName.trim() && newWidgetText.trim()) {
//       const newWidget = {
//         id: `widget-${Date.now()}`,
//         name: newWidgetName,
//         text: newWidgetText,
//       };
//       onAddWidget(targetCategory, newWidget);
//       setNewWidgetName("");
//       setNewWidgetText("");
//       setShowAddForm(false);
//     }
//   };

//   const handleConfirm = () => {
//     // Add selected existing widgets
//     Object.entries(selectedWidgets).forEach(([key, isSelected]) => {
//       if (isSelected) {
//         const [categoryName, widgetId] = key.split("-");
//         const widget = dashboardData.categories[categoryName].widgets[widgetId];
//         if (widget && categoryName !== targetCategory) {
//           onAddWidget(targetCategory, {
//             ...widget,
//             id: `${widget.id}-copy-${Date.now()}`,
//           });
//         }
//       }
//     });

//     setSelectedWidgets({});
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
//       <div className="bg-white w-1/2 h-full flex flex-col shadow-2xl">
//         {/* Modal Header */}
//         <div className="bg-blue-900 text-white p-4 flex justify-between items-center flex-shrink-0">
//           <h2 className="text-lg font-semibold">Add Widget</h2>
//           <button onClick={onClose} className="text-white hover:text-gray-200">
//             <X size={20} />
//           </button>
//         </div>

//         {/* Modal Content - Scrollable */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-6">
//             <p className="text-gray-600 mb-6">
//               Personalise your dashboard by adding the following widget
//             </p>

//             {/* Tabs */}
//             <div className="flex border-b mb-6 sticky top-0 bg-white z-10">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-6 py-3 text-sm font-medium ${
//                     activeTab === tab
//                       ? "text-blue-600 border-b-2 border-blue-600"
//                       : "text-gray-500 hover:text-gray-700"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Widget List - Now properly scrollable */}
//             <div className="space-y-3 mb-8">
//               {getAllWidgets().map((widget) => (
//                 <div
//                   key={`${widget.categoryName}-${widget.id}`}
//                   className="flex items-center p-4 hover:bg-gray-50 rounded-lg border border-gray-100"
//                 >
//                   <input
//                     type="checkbox"
//                     id={`${widget.categoryName}-${widget.id}`}
//                     checked={
//                       selectedWidgets[`${widget.categoryName}-${widget.id}`] ||
//                       false
//                     }
//                     onChange={() =>
//                       handleWidgetToggle(widget.categoryName, widget.id)
//                     }
//                     className="mr-4 w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor={`${widget.categoryName}-${widget.id}`}
//                     className="flex-1 text-sm text-gray-700 cursor-pointer font-medium"
//                   >
//                     {widget.name}
//                   </label>
//                   <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
//                     {widget.categoryName}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Add New Widget Form */}
//             {showAddForm ? (
//               <div className="border-t pt-6 mt-6">
//                 <h3 className="font-semibold mb-4 text-lg">Add New Widget</h3>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category
//                   </label>
//                   <select
//                     value={targetCategory}
//                     onChange={(e) => setTargetCategory(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     {Object.keys(dashboardData.categories).map(
//                       (categoryName) => (
//                         <option key={categoryName} value={categoryName}>
//                           {categoryName}
//                         </option>
//                       )
//                     )}
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Widget Name
//                   </label>
//                   <input
//                     type="text"
//                     value={newWidgetName}
//                     onChange={(e) => setNewWidgetName(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Enter widget name"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Widget Text
//                   </label>
//                   <textarea
//                     value={newWidgetText}
//                     onChange={(e) => setNewWidgetText(e.target.value)}
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                     placeholder="Enter widget text"
//                   />
//                 </div>
//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleAddNewWidget}
//                     className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     Add Widget
//                   </button>
//                   <button
//                     onClick={() => setShowAddForm(false)}
//                     className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="border-t pt-6">
//                 <button
//                   onClick={() => setShowAddForm(true)}
//                   className="text-blue-600 text-sm hover:text-blue-700 font-medium"
//                 >
//                   + Add New Widget
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Modal Footer - Fixed at bottom */}
//         <div className="border-t p-6 flex justify-end gap-3 flex-shrink-0 bg-white">
//           <button
//             onClick={onClose}
//             className="px-6 py-3 text-gray-600 hover:text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg border border-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleConfirm}
//             className="px-8 py-3 bg-blue-900 text-white rounded-lg text-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Dashboard Component
// const Dashboard = () => {
//   const [dashboardData, dispatch] = useReducer(
//     widgetReducer,
//     initialDashboardData
//   );
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleAddWidget = (categoryName, widget) => {
//     dispatch({
//       type: "ADD_WIDGET",
//       categoryName,
//       widget,
//     });
//   };

//   const handleRemoveWidget = (categoryName, widgetId) => {
//     dispatch({
//       type: "REMOVE_WIDGET",
//       categoryName,
//       widgetId,
//     });
//   };

//   const filterWidgets = (widgets) => {
//     if (!searchTerm) return widgets;
//     return Object.entries(widgets).reduce((filtered, [key, widget]) => {
//       if (widget.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//         filtered[key] = widget;
//       }
//       return filtered;
//     }, {});
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b px-6 py-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <span>Home</span>
//             <span>&gt;</span>
//             <span className="text-blue-600 font-medium">Dashboard V2</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search
//                 size={16}
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Search anything..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="w-8 h-8 bg-gray-200 rounded"></div>
//             <div className="w-6 h-6 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       </div>

//       {/* Dashboard Header */}
//       <div className="px-6 py-6">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-xl font-semibold text-gray-800">
//             CNAPP Dashboard
//           </h1>
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-white border border-gray-300 px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
//             >
//               <span>Add Widget</span>
//               <Plus size={16} />
//             </button>
//             <button className="p-2 text-gray-600 hover:text-gray-800">
//               <RotateCcw size={18} />
//             </button>
//             <button className="p-2 text-gray-600 hover:text-gray-800">
//               <MoreVertical size={18} />
//             </button>
//             <div className="flex items-center space-x-2 bg-white border border-gray-300 px-3 py-2 rounded">
//               <Clock size={16} className="text-blue-600" />
//               <span className="text-sm text-gray-700">Last 2 days</span>
//               <ChevronDown size={16} className="text-gray-400" />
//             </div>
//           </div>
//         </div>

//         {/* Dashboard Categories */}
//         {Object.entries(dashboardData.categories).map(
//           ([categoryName, category]) => (
//             <div key={categoryName} className="mb-8">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 {categoryName}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//                 {Object.values(filterWidgets(category.widgets)).map(
//                   (widget) => (
//                     <Widget
//                       key={widget.id}
//                       widget={widget}
//                       onRemove={handleRemoveWidget}
//                       categoryName={categoryName}
//                     />
//                   )
//                 )}
//                 <AddWidgetButton onClick={() => setIsModalOpen(true)} />
//               </div>
//             </div>
//           )
//         )}
//       </div>

//       {/* Add Widget Modal */}
//       <AddWidgetModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onAddWidget={handleAddWidget}
//         categories={Object.keys(dashboardData.categories)}
//         dashboardData={dashboardData}
//       />
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
