import {setFormActive} from './form-status.js';
import {getNewAdvert} from './create-card.js';
import {filterCard, setFilterChange} from './filter.js';
import {debounce} from './util.js';
import {getData} from './api.js';
import {openErrorMessage} from './message.js';

const address = document.querySelector('#address');

const LAT = 35.68950;
const LNG = 139.69171;
const RERENDER_DELAY = 500;

const getCenterMap = (element) => {
  element.setView({
    lat: LAT,
    lng: LNG,
  }, 10);
};

const getValueStart = (element) => {
  element.value = `${LAT  }, ${  LNG}`;
};

const markerGroup = L.layerGroup();

const clearLayers = () => {
  markerGroup.clearLayers();
};

const createMarker = (card) => {
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
    .addTo(markerGroup)
    .bindPopup(getNewAdvert(card));
};

const createData = (data) => {
  setFormActive();
  const newData = data;
  newData.slice(0, 10)
    .forEach((card) => {
      createMarker(card);
    });
  setFilterChange(debounce(() => {
    clearLayers();

    newData.filter(filterCard).slice(0, 10).forEach((card) => {
      createMarker(card);
    });

  }), RERENDER_DELAY);
};


//создаем карту
const map = L.map('map-canvas')
  .on('load', () => {
    getValueStart(address);
    markerGroup.addTo(map);
    getData(createData, openErrorMessage);
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

//главный маркер
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

const getMapInitialState = () => {
  mainPinMarker.setLatLng({
    lat: LAT,
    lng: LNG,
  });
  getValueStart(address);
  getCenterMap(map);
};

export{getMapInitialState, createData, clearLayers};
