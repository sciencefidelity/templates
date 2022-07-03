const template = document.createElement("template")
template.innerHTML = `
  <style lang="scss">
    .counter {
      margin: 5rem 0;
      text-align: center;
      color: var(--grey-850);
    }

    p {
      margin: 0.4rem;
    }

    button {
      width: 6rem;
      height: 6rem;
      margin: 3rem 0.2rem;
      font-size: 3rem;
      border: 0;
      color: var(--grey-850);
    }

    .count-buttons {
      display: inline-block;
      width: 10rem;
      font-size: 3rem;
      font-weight: bold;
    }
  </style>
  <div class="counter">
    <h1>Counter</h1>
    <button id="decrement">–</button>
    <div class="count-buttons"></div>
    <button id="increment">+</button>
    <p>
      The button has been pushed <code class="count-display"></code> times.
    </p>
  </div>
`

class MyCounter extends HTMLElement {
	constructor() {
		super()

		this.count = 0
		this.attachShadow({ mode: "open" })
		this.shadowRoot?.appendChild(template.content.cloneNode(true))
		this.shadowRoot.querySelector(".count-buttons").innerText =
			this.count.toString()
		this.shadowRoot.querySelector(".count-display").innerText =
			this.count.toString()
	}
	increment() {
		this.count++
		this.shadowRoot.querySelector(".count-buttons").innerText =
			this.count.toString()
		this.shadowRoot.querySelector(".count-display").innerText =
			this.count.toString()
	}
	decrement() {
		this.count--
		this.shadowRoot.querySelector(".count-buttons").innerText =
			this.count.toString()
		this.shadowRoot.querySelector(".count-display").innerText =
			this.count.toString()
	}

	connectedCallback() {
		this.shadowRoot
			.querySelector("#increment")
			.addEventListener("click", () => this.increment())
		this.shadowRoot
			.querySelector("#decrement")
			.addEventListener("click", () => this.decrement())
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector("#increment").removeEventListener()
		this.shadowRoot.querySelector("#decrement").removeEventListener()
	}
}

window.customElements.define("my-counter", MyCounter)
