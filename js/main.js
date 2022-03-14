import {getArrayOfCards} from './data.js';
import {getNewAdvert} from './create-card.js';
import './form-status.js';

const resultArrayOfCards = getArrayOfCards();
getNewAdvert(resultArrayOfCards[0]);
