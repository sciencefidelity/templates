import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"

const counter = document.querySelector("#counter") as HTMLSpanElement
let seconds = 0

setInterval(() => {
  seconds += 1
  counter.textContent = seconds.toString()
}, 1000)

export const number = (): number => {
  return 1
}

export {}
