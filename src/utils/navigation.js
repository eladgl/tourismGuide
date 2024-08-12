export const handleNavigation = (cords) => {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    cords ? cords : "Braude College"
  )}`;
  window.open(googleMapsUrl, "_blank");
};
