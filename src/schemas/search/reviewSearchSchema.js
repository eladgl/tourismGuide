// ReviewsPageSearchSchema.js

export const reviewsPageSearchFields = [
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
    label: "Rating",
    options: ["All", "0", "1", "2", "3", "4", "5"],
    stateKey: "ratingFilter",
  },
  {
    type: "select",
    label: "Category",
    options: ["All", "Adventure", "Culinary", "Historical", "Leisure"],
    stateKey: "categoryFilter",
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
