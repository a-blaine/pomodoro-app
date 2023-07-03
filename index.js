const workButton = document.querySelector("#work");
const breakButton = document.querySelector("#break");
const playButton = document.querySelector("#play");
const timeElement = document.querySelector("#countdown");

const workTime = 50;
const breakTime = 2;
let seconds = 0;
let remainingTime = 0;

function load() {
  timeElement.innerHTML = `${workTime} : 0${seconds}`;
}

function formatTimerInterface(time) {
  remainingTime = time * 60;
  let minutes = Math.floor(remainingTime / 60);
  let countdownSeconds = remainingTime % 60;
  seconds = 59;

  let remainingMinutes = minutes - 1;

  let start = () => {
    timeElement.innerHTML = `${remainingMinutes} : ${seconds}`;
    seconds = seconds - 1;

    if (seconds < 10) {
      seconds = 0 + `${seconds}`;
    }

    if (remainingMinutes < 10) {
      remainingMinutes = 0 + `${minutes}`;
    }
  };

  setInterval(start, 1000);
}

function setCountdown(event) {
  event.preventDefault();
  if (workButton.classList.contains("active")) {
    formatTimerInterface(workTime);
  } else {
    formatTimerInterface(breakTime);
  }
}

function setTimer(time) {
  timeElement.innerHTML = `${time} : 0${seconds}`;
  if (workButton.classList.contains("active")) {
    breakButton.classList.toggle("active");
    workButton.classList.toggle("active");
  } else {
    breakButton.classList.toggle("active");
    workButton.classList.toggle("active");
  }
}

playButton.addEventListener("click", setCountdown);

breakButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(breakTime);
});

workButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(workTime);
});

load();
