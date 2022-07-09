import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * A generic footer with the curren year.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-footer")
export class MyFooter extends LitElement {
  static styles = css`
    footer {
      width: 100vw;
      padding: 0.7rem 0;
      color: var(--accent);
      text-align: center;
      border-top: 2px solid var(--accent);
    }
  `

  /**
   * The current year
   */
  @property()
  year = new Date().getFullYear()

  render() {
    return html`
      <footer>
        <p><strong>&copy; ${this.year}</strong></p>
      </footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-footer": MyFooter
  }
}
