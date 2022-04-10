import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "@/style.scss"

const header = document.createElement("header")
const shadowRoot = header.attachShadow({mode: "open"})
document.body.append(header)
shadowRoot.innerHTML = "<h1>Hello Shadow DOM</h1>"

customElements.define("fancy-tabs", class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.innerHTML = `
      <style>#tabs { color: blue; }</style>
      <div id="tabs">Tab</div>
      <div id="panels">Panel</div>
    `
  }
})
