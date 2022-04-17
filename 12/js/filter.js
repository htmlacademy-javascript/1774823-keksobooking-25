const mapFilter = document.querySelector('.map__filters');
const filterHouse = mapFilter.querySelector('[name="housing-type"]');
const filterPrice = mapFilter.querySelector('[name="housing-price"]');
const filterRooms = mapFilter.querySelector('[name="housing-rooms"]');
const filterGuests = mapFilter.querySelector('[name="housing-guests"]');
const filterFeatures = mapFilter.querySelectorAll('[name="features"]');


const chooseHouses = (element) => filterHouse.value === 'any' || element.offer.type === filterHouse.value;
const chooseRooms = (element) => filterRooms.value === 'any' || element.offer.rooms === +filterRooms.value;
const chooseGuests = (element) => filterGuests.value === 'any' || element.offer.guests === +filterGuests.value;

const priceNumber = {
  low: 10000,
  middle: 50000,
  high: 100000,
};

const choosePrices = (element) => {
  if (filterPrice.value === 'low') {
    return element.offer.price < priceNumber.low;
  } if (filterPrice.value === 'middle') {
    return element.offer.price >= priceNumber.low && element.offer.price <= priceNumber.middle;
  } if (filterPrice.value === 'high') {
    return element.offer.price > priceNumber.middle;
  } if (filterPrice.value === 'any') {
    return element.offer.price >= 0 && element.offer.price <= priceNumber.high;
  }
};

const getСheckedInput = (element) => element.checked;

const chooseFeatures = (element) => Array.prototype.filter.call(filterFeatures, getСheckedInput).every((filterFeature) => {
  if (!element.offer.features) {
    return false;
  }
  return element.offer.features.includes(filterFeature.value);
});

const setFilterChange = (cb) => {
  mapFilter.addEventListener('change', cb);
};

const filterCard = (element) =>
  chooseHouses(element) &&
  chooseRooms(element) &&
  chooseGuests(element) &&
  choosePrices(element) &&
  chooseFeatures(element);

export {filterCard, setFilterChange};
