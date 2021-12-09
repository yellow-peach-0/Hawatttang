const display = document.querySelector("#slideBox")
const buttonL = document.querySelector("#L")
const buttonR = document.querySelector("#R")

buttonL.addEventListener("click", () => {
  display.style.transform = "translate(0)"
})
buttonR.addEventListener("click", () => {
  display.style.transform = "translate(-100vw)"
})