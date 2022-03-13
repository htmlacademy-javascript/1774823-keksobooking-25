import {getArrayOfCards} from './data.js';
import {getNewAdvert} from './create-card.js';

const resultArrayOfCards = getArrayOfCards();
getNewAdvert(resultArrayOfCards[0]);
