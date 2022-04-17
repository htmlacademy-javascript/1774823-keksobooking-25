const priceSlider = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const typeOfHousing = document.querySelector('#type');

const STEP = 1000;
const MAX = 100000;

const MinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

priceInput.value = 1000;

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: MAX,
  },
  start: 0,
  step: STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

priceSlider.noUiSlider.on('update', () => {
  priceInput.value = priceSlider.noUiSlider.get();
});

typeOfHousing.addEventListener('change', () => {
  if (typeOfHousing.value === 'palace') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: MinPrice.palace,
        max: MAX
      },
      step: STEP,
      start: MAX
    });
  } if (typeOfHousing.value === 'house') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: MinPrice.house,
        max: MAX
      },
      step: STEP,
      start: MinPrice.house
    });
  } if (typeOfHousing.value === 'hotel') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: MinPrice.hotel,
        max: MAX
      },
      step: STEP,
      start: MinPrice.hotel
    });
  } if (typeOfHousing.value === 'flat') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: MinPrice.flat,
        max: MAX
      },
      step: STEP,
      start: MinPrice.flat
    });
  } if (typeOfHousing.value === 'bungalow') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: MinPrice.bungalow,
        max: MAX
      },
      step: STEP,
      start: MinPrice.bungalow
    });
  }
});

