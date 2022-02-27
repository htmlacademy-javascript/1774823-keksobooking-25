const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return 'неверно задан диапазон';
  }
};

const getRandomFromRangeToFixed = (min, max, numberOfSimbols) => {
  if (min < max && min >=0 && numberOfSimbols >= 0) {
    min = Math.floor(min);
    max = Math.ceil(max);
    const nOS = Math.pow(10, numberOfSimbols);
    return Math.floor ((Math.random() * (max - min + 1) + min) * nOS) / nOS;
  } else {
    return 'неверно задан диапазон';
  }
};

getRandomFromRangeToFixed(1,10,10);

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

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const getRandomArray = (array) => {
  const maxLength = array.length;
  const lengthOfArray = getRandomIntInclusive(1, maxLength);
  const finishedArray = [];

  for (let i = 0; i < lengthOfArray; i++) {
    const indexValue = getRandomIntInclusive(0, maxLength - 1);
    const newElement = array[indexValue];

    if (!finishedArray.includes(newElement)) {
      finishedArray.push(newElement);
    }
  }
  return finishedArray;
};

const createSimilarDescription = () => ({
  author: {
    avatar: getRandomArrayElement(avatar),
  },
  offer: {
    title: 'заголовок предложения',
    address: 111,
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
    lat: getRandomFromRangeToFixed(35.65000, 35.70000, 5),
    lng: getRandomFromRangeToFixed(139.70000, 139.80000, 5)
  },
});

const similarDescriptions = Array.from({length: 10}, createSimilarDescription);
console.log(similarDescriptions);
