let workButton = document.querySelector("#work");
let breakButton = document.querySelector("#break");
let playButton = document.querySelector("#play");
let minutesElement = document.querySelector("#minutes");
let secondsElement = document.querySelector("#seconds");

let workTime = 50;
let breakTime = 10;

function start(event) {
  event.preventDefault();
  seconds = 59;
  let workCountdown = workTime - 1;
  let breakCountdown = breakTime - 1;

  const countdown = () => {
    minutesElement.innerHTML = workCountdown;
    secondsElement.innerHTML = seconds;
    seconds = seconds - 1;

    if (seconds < 10) {
      seconds = 0 + `${seconds}`;
    }

    if (seconds == 0) {
      seconds = 59;
      workCountdown = workCountdown - 1;
    }
  };

  setInterval(countdown, 1000);
}

function setTimer(time) {
  minutesElement.innerHTML = time;
  if (workButton.classList.contains("active")) {
    breakButton.classList.toggle("active");
    workButton.classList.toggle("active");
  } else {
    breakButton.classList.toggle("active");
    workButton.classList.toggle("active");
  }
}

playButton.addEventListener("click", (event) => {
  event.preventDefault();
  start();
});
breakButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(breakTime);
});
workButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(workTime);
});
