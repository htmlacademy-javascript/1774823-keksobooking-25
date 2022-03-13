import {createSimilarDescription } from './data.js';
import './creat-element.js';

const getSimilarDescriptions = () => Array.from({length: 10}, createSimilarDescription);
getSimilarDescriptions();
