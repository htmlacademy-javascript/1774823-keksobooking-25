import { sendData } from './api.js';
import { openErrorMessage} from './message.js';
import { getFormInitialState } from './form.js';

const form = document.querySelector('.ad-form');
const validRooms = document.querySelector('#room_number');
const validCopacity = document.querySelector('#capacity');
const validType = document.querySelector('#type');
const validPrice = document.querySelector('#price');
const validTimeIn = document.querySelector('#timein');
const validTimeOut = document.querySelector('#timeout');


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

const getValidOption = () => roomOption[validRooms.value].includes(validCopacity.value);

const getDeliveryErrorMessage = () => {
  if (validRooms.value === '100' || validCopacity.value === '0') {
    return '100 комнат не для гостей';
  } else {
    return 'маловато комнат';
  }
};

pristine.addValidator(validCopacity, getValidOption, getDeliveryErrorMessage);

const getValidType = () => {
  if (validType.value === 'bungalow') {
    validPrice.placeholder = '0';
    validPrice.min = '0';
  } if (validType.value === 'flat') {
    validPrice.placeholder = '1000';
    validPrice.min = '1000';
  } if (validType.value === 'hotel') {
    validPrice.placeholder = '3000';
    validPrice.min = '3000';
  } if (validType.value === 'house') {
    validPrice.placeholder = '5000';
    validPrice.min = '5000';
  } if (validType.value === 'palace') {
    validPrice.placeholder = '10000';
    validPrice.min = '10000';
  }
};

validType.addEventListener('change', () => {
  getValidType();
});

const maxPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const getValidPrice = () => validPrice.value >= maxPrice[validType.value];

const getTypeErrorMessage = () => {
  if (validPrice.value <= maxPrice[validType.value]) {
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

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      sendData(getFormInitialState, openErrorMessage, new FormData(evt.target));
    }
  });
};

setUserFormSubmit();

