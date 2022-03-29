const errorTemplate = document.querySelector('#error').content;
const map = document.querySelector('.map__canvas');

const getError = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);

  newErrorTemplate.querySelector('.error__message').textContent = 'Ошибка';
  map.appendChild(newErrorTemplate);
};


export {getError};

