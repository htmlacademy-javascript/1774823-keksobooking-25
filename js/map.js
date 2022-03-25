import {setFormActive} from './form-status.js';
import {getArrayOfCards} from './data.js';
import {getNewAdvert} from './create-card.js';

const LAT = 35.68950;
const LNG = 139.69171;

const points = getArrayOfCards();
const address = document.querySelector('#address');
const buttonReset = document.querySelector('.ad-form__reset');

const getCenterMap = (element) => {
  element.setView({
    lat: LAT,
    lng: LNG,
  }, 10);
};

const getValueStart = (element) => {
  element.value = `${LAT  }, ${  LNG}`;
};

//отрисовка похожих маркеров
const addSimilarPoints = (element) => {
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
      .addTo(element)
      .bindPopup(getNewAdvert(card));
  });
};

//создаем карту
const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    getValueStart(address);
    addSimilarPoints(map);
  });

getCenterMap(map);

//добавляем слои
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//главная иконка
const mainPinIcon = L.icon(
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  }
);

//ггавный маркер
const mainPinMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

//передвижение маркера
mainPinMarker.on('drag', (evt) => {
  address.value = `${evt.target.getLatLng()['lat'].toFixed(5)  }, ${  evt.target.getLatLng()['lng'].toFixed(5)}`;
});

mainPinMarker.addTo(map);

//сброс карты
buttonReset.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: LAT,
    lng: LNG,
  });

  getValueStart(address);

  getCenterMap(map);
});
