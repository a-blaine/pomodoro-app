let workButton = document.querySelector("#work");
let breakButton = document.querySelector("#break");
let playButton = document.querySelector("#play");
let minutesElement = document.querySelector("#minutes");

let seconds = "00";
let milliseconds = "00";

function start(event) {
  event.preventDefault();
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

playButton.addEventListener("click", start);
breakButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(10);
});
workButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTimer(50);
});
