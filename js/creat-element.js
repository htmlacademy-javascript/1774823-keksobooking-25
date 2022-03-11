import {createSimilarDescription } from './data.js';

const map = document.querySelector('.map__canvas');
const template = document.querySelector('#card').content.querySelector('.popup');
const exampleDescription = createSimilarDescription();

const addNewDescription = (element) => {
  const newTemplate = template.cloneNode(true);

  newTemplate.querySelector('.popup__title').textContent = element.offer.title;
  newTemplate.querySelector('.popup__text--address').textContent = element.offer.address;
  newTemplate.querySelector('.popup__text--price').textContent = `${element.offer.price  } ₽/ночь`;
  const getType = function () {
    const popupType = newTemplate.querySelector('.popup__type');
    newTemplate.querySelector('.popup__type').textContent = element.offer.type;
    if (element.offer.type === 'flat') {
      popupType.textContent = 'Квартира';
    } if (element.offer.type === 'bungalow') {
      popupType.textContent = 'Бунгало';
    } if (element.offer.type === 'house') {
      popupType.textContent = 'Дом';
    } if (element.offer.type === 'palace') {
      popupType.textContent = 'Дворец';
    } if (element.offer.type === 'hotel') {
      popupType.textContent = 'Отель';
    }
  };
  getType();

  newTemplate.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms  } комнаты для ${  element.offer.guests  } гостей`;
  newTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${  element.offer.checkin  }, выезд до ${  element.offer.checkout}`;
  const getFeatures = function () {
    const featuresFromData = element.offer.features;
    const featureList = newTemplate.querySelector('.popup__features');
    const fragment = document.createDocumentFragment();

    featuresFromData.forEach((feature) => {
      const featureIten = featureList.querySelector(`.popup__feature--${  feature}`);

      if (featureIten) {
        fragment.append(featureIten);
      }
    });
    featureList.innerHTML = '';
    featureList.append(fragment);
  };
  getFeatures();

  newTemplate.querySelector('.popup__description').textContent = element.offer.description;

  const getPhotos = function () {
    const popupPhotosDiv = newTemplate.querySelector('.popup__photos');
    const photoFromData = element.offer.photos;
    popupPhotosDiv.innerHTML = '';
    for (let i = 0; i < photoFromData.length; i++) {
      const newPh = document.createElement('img');
      newPh.classList.add('popup__photo');
      newPh.width = 45;
      newPh.height = 40;
      newPh.src = photoFromData[i];

      popupPhotosDiv.append(newPh);
    }
  };
  getPhotos();

  newTemplate.querySelector('.popup__avatar').src = element.author.avatar;

  for (let firstKey in element) {
    if (typeof element[firstKey] === 'object') {
      for (let secondKey in element[firstKey]) {
        if (element[firstKey][secondKey] === undefined) {
          newTemplate.querySelector('popup__' + element[firstKey]).remove;
        }
        console.log(element[firstKey][secondKey]);
      }
    }
  }

  map.append(newTemplate);
};

addNewDescription(exampleDescription);
