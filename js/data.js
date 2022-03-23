import {getRandomIntInclusive, getRandomFromRangeToFixed, getRandomArrayElement, getRandomArray} from './util.js';

const avatar = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const check = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


const createSimilarCard = () => {
  const randomLat = getRandomFromRangeToFixed(35.65000, 35.70000, 5);
  const randomLng =  getRandomFromRangeToFixed(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getRandomArrayElement(avatar),
    },
    offer: {
      title: 'заголовок предложения',
      address: `${randomLat  } ${  randomLng}`,
      price: getRandomIntInclusive(10, 100),
      type: getRandomArrayElement(type),
      rooms: getRandomIntInclusive(1, 5),
      guests: getRandomIntInclusive(1, 10),
      checkin: getRandomArrayElement(check),
      checkout: getRandomArrayElement(check),
      features: getRandomArray(features),
      description: 'описание помещения',
      photos: getRandomArray(photos),
    },
    location: {
      lat: randomLat,
      lng: randomLng,
    }
  };
};

const getArrayOfCards = () => Array.from({length: 10}, createSimilarCard);

export{getArrayOfCards};

