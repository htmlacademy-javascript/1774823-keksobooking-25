const mainForm = document.querySelector('.ad-form');
const formFieldsets = mainForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapSelects = mapForm.querySelectorAll('.map__filter');
const mapFeature = mapForm.querySelector('.map__features');
const featuresInput = mapFeature.querySelectorAll('.map__checkbox');

const setFormInactive = () => {
  mainForm.classList.add('ad-form--disabled');

  for (let i = 0; i < formFieldsets.length; i++) {
    formFieldsets[i].disabled = true;
  }

  mapForm.classList.add('ad-form--disabled');
  for (let i = 0; i < mapSelects.length; i++) {
    mapSelects[i].disabled = true;
  }

  mapFeature.classList.add('ad-form--disabled');
  for (let i = 0; i < featuresInput.length; i++) {
    featuresInput[i].disabled = true;
  }
};

setFormInactive();

const setFormActive = () => {
  mainForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < formFieldsets.length; i++) {
    formFieldsets[i].disabled = false;
  }

  mapForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < mapSelects.length; i++) {
    mapSelects[i].disabled = false;
  }

  mapFeature.classList.remove('ad-form--disabled');
  for (let i = 0; i < featuresInput.length; i++) {
    featuresInput[i].disabled = false;
  }
};


export {setFormInactive, setFormActive};
