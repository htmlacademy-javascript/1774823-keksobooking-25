import { getMapInitialState, clearLayers } from './map.js';
import { openSuccessMessage } from './message.js';

const form = document.querySelector('.ad-form');
const buttonReset = document.querySelector('.ad-form__reset');
const mapFilter = document.querySelector('.map__filters');
const filterFeatures = mapFilter.querySelectorAll('[name="features"]');
const mapFeatures = mapFilter.querySelectorAll('select');

const checkboxReset = (element) => {
  element.forEach((value) => {
    value.checked = false;
  });
};

const filterReset = (element) => {
  element.forEach((el) => {
    el.value = 'any';
  });
};

//сброс по кнопке 'очистить'
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  getMapInitialState();
  clearLayers();
  filterReset(mapFeatures);
  checkboxReset(filterFeatures);
});


const getFormInitialState = () => {
  openSuccessMessage();
  form.reset();
  getMapInitialState();
};

export {getFormInitialState, checkboxReset, filterReset};

