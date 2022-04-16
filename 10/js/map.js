import {setFormActive} from './form-status.js';
import {getNewAdvert} from './create-card.js';
import{getData} from './api.js';
import{getErrorMessage} from './message.js';


const LAT = 35.68950;
const LNG = 139.69171;

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

//создаем карту
const map = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    getValueStart(address);
    getData((data) => {
      const newData = data.slice(0, 10);
      newData.forEach((card) => {
        const markerIcon = L.icon(
          {
            iconUrl: './img/pin.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
          });
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
    }, getErrorMessage
    );
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
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainPinMarker.setLatLng({
    lat: LAT,
    lng: LNG,
  });

  getValueStart(address);

  getCenterMap(map);
});
