import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-footer")
export class MyFooter extends LitElement {
  static styles = css`
    footer {
      width: 100vw;
      padding: 2rem 0;
      color: var(--grey-850);
      text-align: center;
      border-top: 2px solid var(--grey-850);
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
        <p>&copy; ${this.year}</p>
      </footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-footer": MyFooter
  }
}
