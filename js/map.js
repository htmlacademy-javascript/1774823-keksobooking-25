import {setFormActive} from './form-status.js';
import {getArrayOfCards} from './data.js';
import {getNewAdvert} from './create-card.js';

const address = document.querySelector('#address');
const buttonReset = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    address.value = `${35.68951  } ${  139.69171}`;
  })
  .setView({
    lat: 35.68951,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon(
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  }
);

const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng()['lat'].toFixed(5)  } ${  evt.target.getLatLng()['lng'].toFixed(5)}`;
});

mainPinMarker.addTo(map);

buttonReset.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.68951,
    lng: 139.69171,
  });

  map.setView({
    lat: 35.68951,
    lng: 139.69171,
  }, 10);
});

const points = getArrayOfCards();
const markerIcon = L.icon(
  {
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

points.forEach((card) => {
  const marker = L.marker({
    lat: card.location.lat,
    lng: card.location.lng
  },
  {
    icon: markerIcon,
  });

  marker
    .addTo(map)
    .bindPopup(getNewAdvert(card));
});

