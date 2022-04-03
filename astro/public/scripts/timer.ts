const counter = document.querySelector("#counter")
let seconds = 0

const timer = () => {
  setInterval(() => {
    seconds += 1
    counter.textContent = seconds.toString()
  }, 1000)
}
timer()

counter.textContent = seconds.toString()

console.log(seconds)
