const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;
const map = document.querySelector('.map__canvas');


const getSuccessMessage = () => {
  const newSuccessTemplate = successTemplate.cloneNode(true);
  map.appendChild(newSuccessTemplate);
};

const getErrorMessage = () => {
  const newErrorTemplate = errorTemplate.cloneNode(true);
  map.appendChild(newErrorTemplate);
};

export{getSuccessMessage, getErrorMessage};
