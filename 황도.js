// identity slider
const display = document.querySelector("#slideBox")
const buttonL = document.querySelector("#L")
const buttonR = document.querySelector("#R")
let current = 1;

buttonL.addEventListener("click", () => {
  if (current == 1) {
    display.style.transform = "translate(-100vw)"
    current = 2;
  } else if (current == 2) {
    display.style.transform = "translate(0)"
    current = 1;
  }
})
buttonR.addEventListener("click", () => {
  if (current == 1) {
    display.style.transform = "translate(-100vw)"
    current = 2;
  } else if (current == 2) {
    display.style.transform = "translate(0)"
    current = 1;
  }
})
