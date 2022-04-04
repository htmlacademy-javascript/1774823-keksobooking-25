const priceSlider = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const typeOfHousing = document.querySelector('#type');

priceInput.value = 1000;

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1000,
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
        min: 10000,
        max: 100000
      },
      step: 1000,
      start: 10000
    });
  } if (typeOfHousing.value === 'house') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: 5000,
        max: 100000
      },
      step: 1000,
      start: 5000
    });
  } if (typeOfHousing.value === 'hotel') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: 3000,
        max: 100000
      },
      step: 1000,
      start: 3000
    });
  } if (typeOfHousing.value === 'flat') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: 1000,
        max: 100000
      },
      step: 1000,
      start: 1000
    });
  } if (typeOfHousing.value === 'bungalow') {
    priceSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100000
      },
      step: 1000,
      start: 0
    });
  }
});

