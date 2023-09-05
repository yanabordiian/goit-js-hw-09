import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
  dataPicker: document.querySelector('#datetime-picker'),
  button: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

let currentDate = new Date();
let selectedDate = null;
let timePeriod = null;
let intervalId = null;

refs.button.setAttribute('disabled', 'true');
refs.button.addEventListener('click', onTimerStart);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
         selectedDate = selectedDates[0];
        timePeriod = selectedDate - currentDate;
      
        if (selectedDate <= currentDate) {return Notiflix.Notify.failure("Please choose a date in the future");
        }
        refs.button.removeAttribute('disabled');
    },
  };

 const fp = flatpickr(refs.dataPicker, options); 

function onTimerStart(e) {
  updateElements(convertMs(timePeriod));
  startTimer();
  refs.button.setAttribute('disabled', 'true');
  refs.dataPicker.setAttribute('disabled', 'true');
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function startTimer() {
  intervalId = setInterval(() => {
    stopTimer();

    timePeriod -= 1000;
    convertMs(timePeriod);
    updateElements(convertMs(timePeriod));
  },1000);
}

function stopTimer() {
if(
  (refs.days.textContent === '00') &
  (refs.hours.textContent === '00') &
  (refs.minutes.textContent === '00') &
  (refs.seconds.textContent === '01')
) {
  clearInterval(intervalId);
}
}

function updateElements({ days, hours, minutes, seconds }) {
  refs.days.textContent = days.toString();
  refs.hours.textContent = hours.toString();
  refs.minutes.textContent = minutes.toString();
  refs.seconds.textContent = seconds.toString();
}

