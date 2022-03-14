const setFormInactive = () => {

  const mainForm = document.querySelector('.ad-form');
  mainForm.classList.add('ad-form--disabled');

  const formFieldsets = mainForm.querySelectorAll('fieldset');
  for (let i = 0; i < formFieldsets.length; i++) {
    formFieldsets[i].disabled = true;
  }

  const mapForm = document.querySelector('.map__filters');
  mapForm.classList.add('ad-form--disabled');
  const mapSelects = mapForm.querySelectorAll('.map__filter');
  for (let i = 0; i < mapSelects.length; i++) {
    mapSelects[i].disabled = true;
  }

  const mapFeature = mapForm.querySelector('.map__features');
  mapFeature.classList.add('ad-form--disabled');
  const featuresInput = mapFeature.querySelectorAll('.map__checkbox');
  for (let i = 0; i < featuresInput.length; i++) {
    featuresInput[i].disabled = true;
  }
};

const setFormActive = () => {
  const mainForm = document.querySelector('.ad-form');
  mainForm.classList.remove('ad-form--disabled');

  const formFieldsets = mainForm.querySelectorAll('fieldset');
  for (let i = 0; i < formFieldsets.length; i++) {
    formFieldsets[i].disabled = false;
  }

  const mapForm = document.querySelector('.map__filters');
  mapForm.classList.remove('ad-form--disabled');
  const mapSelects = mapForm.querySelectorAll('.map__filter');
  for (let i = 0; i < mapSelects.length; i++) {
    mapSelects[i].disabled = false;
  }

  const mapFeature = mapForm.querySelector('.map__features');
  mapFeature.classList.remove('ad-form--disabled');
  const featuresInput = mapFeature.querySelectorAll('.map__checkbox');
  for (let i = 0; i < featuresInput.length; i++) {
    featuresInput[i].disabled = false;
  }
};

export {setFormInactive, setFormActive};
