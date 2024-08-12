// GuidePageSearchSchema.js
export const guidePageSearchFields = [
  {
    type: "text",
    label: "Search Query",
    placeholder: "Search by name...",
    stateKey: "searchQuery",
  },
  {
    type: "select",
    label: "Location",
    options: ["All", "North", "South", "Central"],
    stateKey: "locationFilter",
  },
  {
    type: "select",
    label: "Daily Rate",
    options: ["All", "0-200", "201-400", "401-600"],
    stateKey: "dailyRateFilter",
  },
  {
    type: "select",
    label: "Min Rating",
    options: ["0", "1", "2", "3", "4", "5"],
    stateKey: "minRating",
  },
  {
    type: "select",
    label: "Max Rating",
    options: ["0", "1", "2", "3", "4", "5"],
    stateKey: "maxRating",
  },
];
