const map = document.querySelector('.map__canvas');
const template = document.querySelector('#card').content.querySelector('.popup');

const getNewAdvert = (card) => {
  const newTemplate = template.cloneNode(true);

  newTemplate.querySelector('.popup__title').textContent = card.offer.title;
  newTemplate.querySelector('.popup__text--address').textContent = card.offer.address;
  newTemplate.querySelector('.popup__text--price').textContent = `${card.offer.price  } ₽/ночь`;

  newTemplate.querySelector('.popup__type').textContent = card.offer.type;
  if (card.offer.type === 'flat') {
    newTemplate.querySelector('.popup__type').textContent = 'Квартира';
  } if (card.offer.type === 'bungalow') {
    newTemplate.querySelector('.popup__type').textContent = 'Бунгало';
  } if (card.offer.type === 'house') {
    newTemplate.querySelector('.popup__type').textContent = 'Дом';
  } if (card.offer.type === 'palace') {
    newTemplate.querySelector('.popup__type').textContent = 'Дворец';
  } if (card.offer.type === 'hotel') {
    newTemplate.querySelector('.popup__type').textContent = 'Отель';
  }

  newTemplate.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms  } комнаты для ${  card.offer.guests  } гостей`;
  newTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${  card.offer.checkin  }, выезд до ${  card.offer.checkout}`;

  const featuresFromData = card.offer.features;
  const featureList = newTemplate.querySelector('.popup__features');
  const fragment = document.createDocumentFragment();

  if (featuresFromData === undefined) {
    featureList.style.display = 'none';
  } else {
    featuresFromData.forEach((feature) => {
      const featureItem = featureList.querySelector(`.popup__feature--${  feature}`);

      if (featureItem) {
        fragment.append(featureItem);
      }
    });
    featureList.innerHTML = '';
    featureList.append(fragment);
  }

  newTemplate.querySelector('.popup__description').textContent = card.offer.description;
  if (card.offer.description === undefined) {
    newTemplate.querySelector('.popup__description').style.display = 'none';
  }

  const popupPhotosDiv = newTemplate.querySelector('.popup__photos');
  const photoFromData = card.offer.photos;
  popupPhotosDiv.innerHTML = '';

  if (photoFromData === undefined) {
    popupPhotosDiv.style.display = 'none';
  } else {
    for (let i = 0; i < photoFromData.length; i++) {
      const newPh = document.createElement('img');
      newPh.classList.add('popup__photo');
      newPh.width = 45;
      newPh.height = 40;
      newPh.alt = 'Фотография жилья';
      newPh.src = photoFromData[i];
      popupPhotosDiv.append(newPh);
    }
  }

  newTemplate.querySelector('.popup__avatar').src = card.author.avatar;

  map.append(newTemplate);
};

export {getNewAdvert};
