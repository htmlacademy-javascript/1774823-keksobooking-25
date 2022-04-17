import { sendData } from './api.js';
import { openErrorMessage} from './message.js';
import { getMapInitialState, clearLayers } from './map.js';
import { openSuccessMessage } from './message.js';
import {setFilterChange} from './filter.js';
import {previewAvatar, previewPhoto} from './form-photo.js';


const form = document.querySelector('.ad-form');
const validRooms = document.querySelector('#room_number');
const validCopacity = document.querySelector('#capacity');
const validType = document.querySelector('#type');
const validPrice = document.querySelector('#price');
const validTimeIn = document.querySelector('#timein');
const validTimeOut = document.querySelector('#timeout');
const mapFilter = document.querySelector('.map__filters');
const buttonReset = document.querySelector('.ad-form__reset');


const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'setup__error-text',
});

const roomOption = {
  '1' : ['1'],
  '2' : ['1', '2'],
  '3' : ['1', '2', '3'],
  '100' : ['0'],
};

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const getValidRoom = () => roomOption[validRooms.value].includes(validCopacity.value);

const getDeliveryErrorMessage = () => {
  if (validRooms.value === '100' || validCopacity.value === '0') {
    return '100 комнат не для гостей';
  } else {
    return 'маловато комнат';
  }
};

pristine.addValidator(validCopacity, getValidRoom, getDeliveryErrorMessage);

const getValidType = () => {
  if (validType.value === 'bungalow') {
    validPrice.placeholder = minPrice.bungalow;
    validPrice.min = minPrice.bungalow;
  } if (validType.value === 'flat') {
    validPrice.placeholder = minPrice.flat;
    validPrice.min = minPrice.flat;
  } if (validType.value === 'hotel') {
    validPrice.placeholder = minPrice.hotel;
    validPrice.min = minPrice.hotel;
  } if (validType.value === 'house') {
    validPrice.placeholder = minPrice.house;
    validPrice.min = minPrice.house;
  } if (validType.value === 'palace') {
    validPrice.placeholder = minPrice.palace;
    validPrice.min = minPrice.palace;
  }
};

validType.addEventListener('change', () => {
  getValidType();
});

const getValidPrice = () => validPrice.value >= minPrice[validType.value];

const getTypeErrorMessage = () => {
  if (validPrice.value <= minPrice[validType.value]) {
    return 'Меньше минимального значения';
  }
};

pristine.addValidator(validPrice, getValidPrice, getTypeErrorMessage);


const getValdTimeIn = () => {
  if (validTimeIn.value === '12:00') {
    validTimeOut.value = '12:00';
  } if (validTimeIn.value === '13:00') {
    validTimeOut.value = '13:00';
  } if (validTimeIn.value === '14:00') {
    validTimeOut.value = '14:00';
  }
};

validTimeIn.addEventListener('change', () => {
  getValdTimeIn();
});

const getValdTimeOut = () => {
  if (validTimeOut.value === '12:00') {
    validTimeIn.value = '12:00';
  } if (validTimeOut.value === '13:00') {
    validTimeIn.value = '13:00';
  } if (validTimeOut.value === '14:00') {
    validTimeIn.value = '14:00';
  }
};

validTimeOut.addEventListener('change', () => {
  getValdTimeOut();
});

const resetFilterForm = (element) => {
  element.reset();
};

//сброс по кнопке 'очистить'
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  previewAvatar.src = 'img/muffin-grey.svg';
  previewPhoto.innerHTML = '';
  getMapInitialState();
  clearLayers();
  resetFilterForm(mapFilter);
});


const getFormInitialState = () => {
  openSuccessMessage();
  form.reset();
  getMapInitialState();
};


const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    previewAvatar.src = 'img/muffin-grey.svg';
    previewPhoto.innerHTML = '';
    form.removeEventListener('change', setFilterChange);
    resetFilterForm(mapFilter);
    clearLayers();
    if (isValid) {
      sendData(getFormInitialState, openErrorMessage, new FormData(evt.target));
    }
  });
};

setUserFormSubmit();

export {getFormInitialState, resetFilterForm};
