import { html, css, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

/**
 * A generic header element.
 *
 * @slot - This element has a slot
 */
@customElement("my-header")
export class MyHeader extends LitElement {
  static styles = css`
    header {
      width: 100vw;
      padding: 0.3rem 0;
      color: var(--grey-850);
      text-align: center;
    }
  `

  render() {
    return html`
      <header class="header">
        <p>
          <strong><slot></strong>
        </p>
      </header>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader
  }
}
