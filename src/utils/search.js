export const convertTimestampToDate = (timestamp) => {
  if (timestamp && timestamp._seconds) {
    const date = new Date(timestamp._seconds * 1000);
    return date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
  }
  return "";
};

export const handleSearchGeneric = (
  searchState,
  items,
  setFilteredItems,
  prefix = ""
) => {
  let filtered = items;

  Object.keys(searchState).forEach((key) => {
    const value = searchState[key];
    if (value) {
      filtered = filtered.filter((item) => {
        switch (key) {
          case "searchQuery":
            return item[`${prefix}title`]
              .toLowerCase()
              .includes(value.toLowerCase());
          case "locationFilter":
            return (
              item[`${prefix}location`]
                ?.toLowerCase()
                .includes(value.toLowerCase()) ||
              item[`${prefix}Location`]
                ?.toLowerCase()
                .includes(value.toLowerCase())
            );
          case "ratingFilter":
            return item[`${prefix}rating`] === value;
          case "categoryFilter":
            return item[`${prefix}catrgory`]
              .toLowerCase()
              .includes(value.toLowerCase());
          case "startDate":
          case "endDate":
            if (searchState.startDate && searchState.endDate) {
              const itemDate = convertTimestampToDate(item[`${prefix}date`]);
              return (
                itemDate >= searchState.startDate &&
                itemDate <= searchState.endDate
              );
            }
            return true;
          case "minRating":
          case "maxRating":
            if (searchState.minRating && searchState.maxRating) {
              const itemDate = item.rating;
              return (
                itemDate >= searchState.minRating &&
                itemDate <= searchState.maxRating
              );
            }
            return true;
          case "priceRangeFilter":
            const [minPrice, maxPrice] = value.split("-").map(Number);
            return (
              item[`${prefix}price`] >= minPrice &&
              item[`${prefix}price`] <= maxPrice
            );

          default:
            return true;
        }
      });
    }
  });

  setFilteredItems(filtered);
};
