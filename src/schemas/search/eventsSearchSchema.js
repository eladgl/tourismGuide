// EventsSearchSchema.js
export const eventsSearchFields = [
  {
    type: "text",
    label: "Search Query",
    placeholder: "Search for an event...",
    stateKey: "searchQuery",
  },
  {
    type: "select",
    label: "Location",
    options: ["All", "North", "South", "Central"],
    stateKey: "locationFilter",
  },
  {
    type: "date",
    label: "Start Date",
    stateKey: "startDate",
  },
  {
    type: "date",
    label: "End Date",
    stateKey: "endDate",
  },
  {
    type: "select",
    label: "Price Range",
    options: ["All", "0-100", "101-500", "501-1000"],
    stateKey: "priceRangeFilter",
  },
];
