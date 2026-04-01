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
let startTime = 0;
let timerId = null;
let timerIsActive = false
let acumulateTime = 0;

start.addEventListener("click", startStopwatch)
reset.addEventListener("click", resetStopwatch)
stop.addEventListener("click", stopStopwatch)


function startStopwatch() {
  console.log(timerIsActive);
  
  if (timerIsActive) {
    return
  }
  startTime = Date.now()
    timerId = setInterval(() => {
    let currentTime = Date.now()
    let delta = currentTime - startTime + acumulateTime
    console.log(currentTime);
    console.log(delta);
    const { hours, mins, secs } = getTimeComponents(delta)
    output.textContent =  `${hours}:${mins}:${secs}`
    // startSeconds += 1
    // console.log(startSeconds);
    // const time = getTimeFromSeconds(startSeconds)
    // console.log(time)
    // const timeString = `${time.hours}:${time.minutes}:${time.secs}`
    // output.textContent = timeString
    // console.log(timeString)
    }, 1000)
    timerIsActive = true
}


function resetStopwatch() {
  timerIsActive = false
  clearInterval(timerId)
  startTime = 0
  acumulateTime = 0
  // startSeconds = 0
  output.textContent = "00:00:00"
}


function stopStopwatch() {
  timerIsActive = false
  clearInterval(timerId)
  let currentTime = Date.now()
  let delta = currentTime - startTime + acumulateTime
  acumulateTime = delta
}


// function getTimeFromSeconds(startSeconds) {
//   const SECONDS_IN_MINUTE = 60;
//   const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE; // 3600
//   const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR; // 86400

//   const totalSeconds = Math.floor(startSeconds);

//   const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
//   const remSeconds = totalSeconds % SECONDS_IN_DAY;

//   const hours = pad(Math.floor(remSeconds / SECONDS_IN_HOUR));
//   const minutes = pad(
//     Math.floor((remSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)
//   );
//   const secs = pad(remSeconds % SECONDS_IN_MINUTE);

//   return { days, hours, minutes, secs };
// }

function getTimeComponents(time) {
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

