import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-counter")
export class MyCounter extends LitElement {
  static styles = css`
    .counter {
      margin: 5rem 0;
      text-align: center;
    }

    p {
      margin: 0.4rem;
    }

    button {
      width: 6rem;
      height: 6rem;
      margin: 3rem 0.2rem;
      font-size: 4rem;
      padding-bottom: 0.7rem;
      background-color: var(--accent);
      color: var(--gray-000);
      border: 0;
      /* border-radius: 999px; */
    }

    button:hover {
      background-color: var(--accent-hover);
    }

    button:disabled {
      background-color: var(--gray-400);
    }

    .count-buttons {
      display: inline-block;
      width: 10rem;
      font-size: 3rem;
      font-weight: bold;
      color: var(--foreground);
    }
  `

  /**
   * The component title.
   */
  @property({ type: String })
  name = "Counter"

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 3

  /**
   * Disable decrement button when count is zero.
   */
  @property({ type: Boolean })
  disabled = this.count > 0 ? false : true

  /**
   * The html element displaying the count.
   */
  @property()
  display = document.querySelector(".count-display") as HTMLElement

  render() {
    this.display.innerText = this.count.toString()

    return html`
      <div class="counter">
        <h1>${this.name}</h1>
        <button
          @click=${this._decrement}
          part="button"
          ?disabled=${this.disabled}
        >
          –
        </button>
        <div class="count-buttons">${this.count}</div>
        <button @click=${this._increment} part="button">+</button>
        <slot>
      </div>
    `
  }

  private _decrement() {
    this.count--
    if (this.count <= 0) {
      this.disabled = true
    }
    this.display!.innerText = this.count.toString()
  }

  private _increment() {
    this.count++
    if (this.count > 0) {
      this.disabled = false
    }
    this.display!.innerText = this.count.toString()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-counter": MyCounter
  }
}
