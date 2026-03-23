//  - Створити секундомір, який буде мати можливість
// зупинятися та продовжуватися за допомогою кнопок
//  "Старт" та "Стоп".
// Також потрібно мати можливість скидати лічильник до 0.

const output = document.querySelector(".js-clockface");
const start = document.querySelector("[data-action='start']")
const stop = document.querySelector("[data-action='stop']")
const reset = document.querySelector("[data-action='reset']")
console.log(output);

let startSeconds = 0;
let timerId = null;
let timerIsActive = false

start.addEventListener("click", startStopwatch)

function startStopwatch() {
    const timerId = setInterval( () => {
    startSeconds += 1
    console.log(startSeconds);
    }, 1000)
}

function getTimeFromSeconds(startSeconds) {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE; // 3600
  const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR; // 86400

  const totalSeconds = Math.floor(startSeconds);

  const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
  const remSeconds = totalSeconds % SECONDS_IN_DAY;

  const hours = pad(Math.floor(remSeconds / SECONDS_IN_HOUR));
  const minutes = pad(
    Math.floor((remSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)
  );
  const secs = pad(remSeconds % SECONDS_IN_MINUTE);

  return { days, hours, minutes, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}