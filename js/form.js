import { getMapInitialState } from './map.js';
import { openSuccessMessage } from './message.js';


const form = document.querySelector('.ad-form');
const buttonReset = document.querySelector('.ad-form__reset');


//сброс по кнопке 'очистить'
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  getMapInitialState();
});

//
const getFormInitialState = () => {
  openSuccessMessage();
  form.reset();
  getMapInitialState();
};

export {getFormInitialState};

