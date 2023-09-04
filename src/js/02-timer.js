import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const currentDate = new Date();
      
        if (selectedDate <= currentDate) {Notiflix.Notify.failure("Please choose a date in the future");
        document.querySelector('[data-start]').disabled = true;}
        else {
            document.querySelector('[data-start]').disabled = false;
        }
    },
  };
  
  const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
   // days: document.querySelector('[data-days]'),
   // hours: document.querySelector('[data-hours]'),
   // minutes: document.querySelector('[data-minutes]'),
   // seconds: document.querySelector('[data-seconds]'),
}
const countdownTimer = (endDate) => {
    const timerElements = {
      days: document.querySelector('[data-days]'),
      hours: document.querySelector('[data-hours]'),
      minutes: document.querySelector('[data-minutes]'),
      seconds: document.querySelector('[data-seconds]'),
    };

    const updateTimer = () => {
      const now = new Date();
      const timeDifference = endDate - now;

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        Object.values(timerElements).forEach(element => element.textContent = '00');
        Notiflix.Notify.success("Time's up!");
        document.querySelector('[data-start]').disabled = true;
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeDifference);

      timerElements.days.textContent = addLeadingZero(days);
      timerElements.hours.textContent = addLeadingZero(hours);
      timerElements.minutes.textContent = addLeadingZero(minutes);
      timerElements.seconds.textContent = addLeadingZero(seconds);
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
  };

  const convertMs = (ms) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  };

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  flatpickr(refs.input, options);

 refs.btnStart.addEventListener('click', () => {
    const selectedDate = flatpickr.parseDate(refs.input.value);
    countdownTimer(selectedDate);
    refs.btnStart.disabled = true;
  });
