
    const map = L.map('map').setView([-33.9249, 18.4241], 12);
    // location 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
    maxZoom : 19,
}) .addTo(map);

L.marker([-33.9249, 18.4241]).addTo(map)
   .bindPopup("<b>Our Store</b><br>This is our Location.")
    .openPopup();

const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});