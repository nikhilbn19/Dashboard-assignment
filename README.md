## Dashboard UI

  - A modular React + Tailwind CSS dashboard project that supports:

  - Donut charts, multi-color donuts, progress bars.

  - Widgets with add/remove functionality.

  - Modal to add new widgets.

  - Search and filtering.

  - Clean component-based folder structure.

## Features

  - Dashboard Layout with category-based widgets.

  - Reusable Components: DonutChart, MultiColorDonut, ProgressBar, LegendItem.

  - Widget System with add/remove using useReducer.

  - Modal Support to add custom widgets.

  - Responsive Grid Layout for widgets.

  No Data Placeholder for empty widget states.        

## Tech Stack

  - React 18

  - Vite (for fast bundling)

  - Tailwind CSS (for styling)

  - Lucide React (for icons)


## Installation & Setup

  1) Clone the repository

    git clone https://github.com/nikhilbn19/Dashboard-assignment.git
    cd dashboard-ui


2) Install dependencies

    npm install


3) Run development server

    npm run dev


4) Build for production

    npm run build

## Live Demo
[View deployed App on vercel](https://dashboard-assignment-rho-nine.vercel.app/)

## Project Structure

src/
├── data/
│ └── dashboardData.js # Initial data and reducer

├── components/
│ ├── charts/ # Chart components
│ │ ├── DonutChart.jsx
│ │ ├── MultiColorDonut.jsx
│ │ ├── ProgressBar.jsx
│ │ └── LegendItem.jsx

│ ├── common/
│ │ └── NoDataPlaceholder.jsx

│ ├── widgets/ # Widget components
│ │ ├── WidgetCard.jsx
│ │ └── AddWidgetButton.jsx

│ ├── modals/
│ │ └── AddWidgetModal.jsx

│ ├── layout/
│ │ ├── Header.jsx
│ │ └── DashboardHeader.jsx

│ └── Dashboard.jsx # Main component

## Screenshots

  <img width="1884" height="888" alt="image" src="https://github.com/user-attachments/assets/7394a04a-76fc-4232-b2fe-740853387110" />
  <img width="943" height="908" alt="image" src="https://github.com/user-attachments/assets/c349e6a1-cc62-4c84-99de-f0c63cea6f51" />

