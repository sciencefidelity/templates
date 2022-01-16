const counter = document.querySelector("#counter") as HTMLElement
let seconds = 0

const timer = () => {
  setInterval(() => {
    seconds += 1
    counter.textContent = seconds.toString()
  }, 1000)
}
timer()
