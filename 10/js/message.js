import {isEscapeKey} from './util.js';


const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const getSuccessMessage = () => {
  const newSuccessTemplate = successTemplate.cloneNode(true);
  document.body.append(newSuccessTemplate);
  const successAdd = document.querySelector('.success');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      successAdd.remove();
    }
  });
  document.addEventListener('click', () => {
    successAdd.remove();
  });
};

const getErrorMessage = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);
  document.body.append(newErrorTemplate);
  const errorAdd = document.querySelector('.error');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      errorAdd.remove();
    }
  });
  document.addEventListener('click', () => {
    errorAdd.remove();
  });
};

export{getSuccessMessage, getErrorMessage};
