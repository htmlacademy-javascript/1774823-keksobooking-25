
import './map.js';
import './form-validation.js';
import './price-slider.js';
import './message.js';
import './form.js';
import './filter.js';
import{getData} from './api.js';
import{openErrorMessage} from './message.js';
import{createData} from './map.js';

getData(createData, openErrorMessage);
