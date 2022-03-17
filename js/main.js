import {getArrayOfCards} from './data.js';
import {getNewAdvert} from './create-card.js';
import {setFormInactive, setFormActive} from './form-status.js';
import './form-validation.js';

setFormInactive();
const resultArrayOfCards = getArrayOfCards();
getNewAdvert(resultArrayOfCards[0]);
setFormActive();
