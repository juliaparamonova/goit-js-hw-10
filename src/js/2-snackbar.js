import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
let delayMs = 0;
let valueRadio = '';

formEl.addEventListener('input', () => {
  delayMs = parseInt(formEl.elements.delay.value);
});

formEl.addEventListener('change', () => {
  valueRadio = formEl.elements.state.value;
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const promisMessage = value => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value === 'fulfilled') {
          iziToast.show({
            title: '✅ OK',
            messageColor: '#fff',
            titleColor: '#fff',
            backgroundColor: '#59a10d',
            message: `Fulfilled promise in ${delayMs}ms`,
          });
          resolve(`Fulfilled promise in ${delayMs}ms`);
        } else {
          iziToast.show({
            title: '❌ ERROR',
            messageColor: '#fff',
            titleColor: '#fff',
            backgroundColor: '#ef4040',
            message: `Rejected promise in ${delayMs}ms`,
          });
          reject(`Rejected promise in ${delayMs}ms`);
        }
      }, delayMs);
    });
  };

  promisMessage(valueRadio)
    .then(value => console.log(value))
    .catch(error => console.log(error));
});