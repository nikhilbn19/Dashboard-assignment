export const initialDashboardData = {
  categories: {
    "CSPM Executive Dashboard": {
      id: "cspm",
      widgets: {
        "cloud-accounts": {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "Connected (2)\nNot Connected (2)",
        },
        "cloud-risk-assessment": {
          id: "cloud-risk-assessment",
          name: "Cloud Account Risk Assessment",
          text: "Failed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)\nTotal: 9659",
        },
      },
    },
    "CWPP Dashboard": {
      id: "cwpp",
      widgets: {
        "namespace-alerts": {
          id: "namespace-alerts",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available!",
        },
        "workload-alerts": {
          id: "workload-alerts",
          name: "Workload Alerts",
          text: "No Graph data available!",
        },
      },
    },
    "Registry Scan": {
      id: "registry",
      widgets: {
        "image-risk-assessment": {
          id: "image-risk-assessment",
          name: "Image Risk Assessment",
          text: "1470 Total Vulnerabilities\nCritical (9)\nHigh (150)",
        },
        "image-security-issues": {
          id: "image-security-issues",
          name: "Image Security Issues",
          text: "2 Total Images\nCritical (2)\nHigh (2)",
        },
      },
    },
  },
};

export const widgetReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.categoryName]: {
            ...state.categories[action.categoryName],
            widgets: {
              ...state.categories[action.categoryName].widgets,
              [action.widget.id]: action.widget,
            },
          },
        },
      };
    case "REMOVE_WIDGET":
      const { [action.widgetId]: removed, ...remainingWidgets } =
        state.categories[action.categoryName].widgets;
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.categoryName]: {
            ...state.categories[action.categoryName],
            widgets: remainingWidgets,
          },
        },
      };
    default:
      return state;
  }
};
