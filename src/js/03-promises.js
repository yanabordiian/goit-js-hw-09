import Notiflix from "notiflix";

const refs = { 
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}
let delay = Number(refs.delay.value);
let step = Number(refs.step.value);
let amount = Number(refs.amount.value);
let position = 0;

refs.form.addEventListener('submit', onHandleForm);

function onHandleForm(e) {
  e.preventDefault(); 
  
  for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += step;
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}