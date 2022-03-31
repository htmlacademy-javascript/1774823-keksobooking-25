import { getSuccessMessage, getErrorMessage } from './message.js';


const getData = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = () => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: new FormData(),
    }
  )
    .then((response) => {
      if(response.ok) {
        getSuccessMessage();
      } else {
        getErrorMessage();
      }
    })
    .catch(() => {
      getErrorMessage();
    });
};


export{getData, sendData};
