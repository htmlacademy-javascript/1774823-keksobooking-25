import { getMapInitialState } from './map.js';
import { openSuccessMessage } from './message.js';
import {filterHouse, filterPrice, filterRooms, filterGuests, filterFeatures} from './filter.js';

const form = document.querySelector('.ad-form');
const buttonReset = document.querySelector('.ad-form__reset');

const checkboxReset = (element) => {
  element.forEach((value) => {
    value.checked = false;
  });
};


//сброс по кнопке 'очистить'
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  getMapInitialState();
  filterHouse.value = 'any';
  filterPrice.value = 'any';
  filterRooms.value = 'any';
  filterGuests.value = 'any';
  checkboxReset(filterFeatures);
});


const getFormInitialState = () => {
  openSuccessMessage();
  form.reset();
  getMapInitialState();
};

export {getFormInitialState};

