import {isEscapeKey} from './util.js';

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const openSuccessMessage = () => {
  const newSuccessTemplate = successTemplate.cloneNode(true);
  document.body.append(newSuccessTemplate);
  const successAdd = document.querySelector('.success');

  const onEscKeydown = (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      successAdd.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };
  successAdd.addEventListener('click', () => {
    successAdd.remove();
    document.removeEventListener('keydown', onEscKeydown);
  });

  document.addEventListener('keydown', onEscKeydown);
};


const openErrorMessage = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);
  document.body.append(newErrorTemplate);
  const errorAdd = document.querySelector('.error');
  const closeErrorButton = document.querySelector('.error__button');

  const onEscKeydown = (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      errorAdd.remove();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  errorAdd.addEventListener('click', () => {
    errorAdd.remove();
    document.removeEventListener('keydown', onEscKeydown);
  });

  closeErrorButton.addEventListener('click', () => {
    errorAdd.remove();
    document.removeEventListener('keydown', onEscKeydown);
  });

  document.addEventListener('keydown', onEscKeydown);
};

export{openSuccessMessage, openErrorMessage};

