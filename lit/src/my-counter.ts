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
      font-size: 3rem;
      color: var(--dark);
      border: 0;
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
   * The component title
   */
  @property()
  name = "Counter"

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  /**
   * Disable decrement button when count is zero.
   */
  @property({ type: Number })
  disabled = true

  render() {
    return html`
      <div class="counter">
        <h1>${this.name}</h1>
        <button
          @click=${this._decrement}
          part="button"
          ?disabled=${this.disabled}
        >
          -
        </button>
        <div class="count-buttons">${this.count}</div>
        <button @click=${this._increment} part="button">+</button>
        <slot />
        <div></div>
      </div>
    `
  }

  private _decrement() {
    const display = document.querySelector(".count-display") as HTMLElement
    this.count--
    if (this.count <= 0) {
      this.disabled = true
    }
    display!.innerText = this.count.toString()
  }

  private _increment() {
    const display = document.querySelector(".count-display") as HTMLElement
    this.count++
    if (this.count > 0) {
      this.disabled = false
    }
    display!.innerText = this.count.toString()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-counter": MyCounter
  }
}
