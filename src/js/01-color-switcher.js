function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
let intervalId = null;

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

buttonStart.addEventListener('click', changeBackgroundColor);
buttonStop.addEventListener('click',stopBackgroundColorChange);

function changeBackgroundColor() {
    if(!intervalId) {
        intervalId = setInterval(() => {document.body.style.backgroundColor = getRandomHexColor();}, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;}
}

function stopBackgroundColorChange() {
clearInterval(intervalId);
intervalId = null;
buttonStart.disabled = false;
buttonStop.disabled = true;
}
