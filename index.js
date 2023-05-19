const minuteElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");
const millisecondElement = document.querySelector(".milliseconds");

const startBotton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

startBotton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
});

let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;

function startTimer() {
  milliseconds++;

  if (milliseconds < 9) {
    millisecondElement.innerText = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    millisecondElement.innerText = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    secondElement.innerText = "0" + seconds;
    milliseconds = 0;
    millisecondElement.innerText = "0" + milliseconds;
  }

  if (seconds < 9) {
    secondElement.innerText = "0" + seconds;
  }
  if (seconds > 9) {
    secondElement.innerText = seconds;
  }
  if (seconds > 59) {
    minutes++;
    minuteElement.innerText = "0" + minutes;
    seconds = 0;
    secondElement.innerText = "0" + seconds;
  }

  if (minutes > 9) {
    minuteElement.innerText = minutes;
  }
}

function clearFields() {
  minutes = 00;
  seconds = 00;
  milliseconds = 00;
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  millisecondElement.textContent = "00";
}
