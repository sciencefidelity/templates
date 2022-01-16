const drawCounter = () => {
  document.querySelector(".count-buttons").textContent = store.counter.toString()
  document.querySelector(".count-display").textContent = store.counter.toString()
}
const bindEvents = () => {
  document.querySelector("#increase").addEventListener('click', () => {
    increase()
    drawCounter()
  })
  document.getElementById('decrease').addEventListener('click', () => {
    decrease()
    drawCounter()
  })
}

const store = {
  counter: 0
}

const increase = () => {
  store.counter++
}

const decrease = () => {
  store.counter--
}

const init = () => {
  bindEvents()
  drawCounter()
}

init()
