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


const isEscapeKey = (evt) => evt.key === 'Escape';

export{getRandomIntInclusive, getRandomFromRangeToFixed, getRandomArrayElement, getRandomArray, isEscapeKey};
