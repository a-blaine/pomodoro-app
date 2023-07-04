const workButton = document.querySelector("#work");
const breakButton = document.querySelector("#break");
const playButton = document.querySelector("#play");
const timeElement = document.querySelector("#countdown");
const resetButton = document.querySelector("#reset");
const stopButton = document.querySelector("#stop");

const workTime = 25;
const breakTime = 1;
let seconds = 0;

function load() {
  timeElement.innerHTML = `${workTime} : 0${seconds}`;
}

function formatTimerInterface(time) {
  let minutes = time;
  playButton.classList.remove("show");
  playButton.classList.add("hide");
  stopButton.classList.remove("hide");
  stopButton.classList.add("show");

  const start = () => {
    if (seconds <= 0) {
      minutes--;
      seconds = 60;
      seconds--;

      if (minutes < 10) {
        minutes = 0 + `${minutes}`;
      }
    } else {
      seconds--;
    }

    if (seconds < 10) {
      seconds = 0 + `${seconds}`;
    }

    if (minutes <= 0 && seconds <= 0) {
      timeElement.innerHTML = `00 : 00`;
      clearInterval(timer);
    }

    timeElement.innerHTML = `${minutes} : ${seconds}`;
  };

  const timer = setInterval(start, 1000);
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
    breakButton.classList.add("active");
    workButton.classList.remove("active");
  } else {
    breakButton.classList.remove("active");
    workButton.classList.add("active");
  }
}

function resetCountdown(event) {
  event.preventDefault();
  if (breakButton.classList.contains("active")) {
    formatTimerInterface(breakTime);
  } else {
    formatTimerInterface(workTime);
  }
}

playButton.addEventListener("click", setCountdown);
resetButton.addEventListener("click", resetCountdown);

breakButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(breakTime);
});

workButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(workTime);
});

load();
