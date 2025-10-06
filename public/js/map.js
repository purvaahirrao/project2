
//     var map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13
// });
document.addEventListener("DOMContentLoaded", function () {
  // listingData comes from the EJS script tag
  const listing = listingData;

  // Extract coordinates (GeoJSON format: [lng, lat])
  const lng = listing.geometry.coordinates[0];
  const lat = listing.geometry.coordinates[1];

var map = L.map('map').setView([lat,lng], 9);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 
    L.marker([lat,lng]).addTo(map)
    .bindPopup(`<h5>${listing.title} </h5><p>Exact Loaction will be provided after booking</p>`)
    .openPopup();
});