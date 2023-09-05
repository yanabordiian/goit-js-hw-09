import Notiflix from "notiflix";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();
  let delay = parseInt(this.elements.delay.value);
  let step = parseInt(this.elements.step.value);
  const amount = parseInt(this.elements.amount.value);

  for (let i = 0; i < amount; i+= 1) {
    const position = i + 1;
    
    try {
      const result = await createPromise(position, currentDelay);
      Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    } catch (error) {
      Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
    }
    delay += step;
  }
});