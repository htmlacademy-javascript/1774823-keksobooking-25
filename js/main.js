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

getRandomIntInclusive(1, 6);
getRandomFromRangeToFixed(1,10,10);
