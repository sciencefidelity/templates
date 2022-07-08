import { html, css, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

/**
 * A generic header element.
 *
 * @slot - This element has a slot
 */
@customElement("my-navbar")
export class MyNavbar extends LitElement {
  static styles = css`
    nav {
      width: 100vw;
      padding: 1rem 0rem;
      font-weight: 600;
      color: var(--gray-000);
      text-align: center;
      background-color: var(--accent);
    }

    ul {
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
      list-style: none;
    }
  `

  render() {
    return html`
      <nav class="nav">
        <ul>
          <slot>
        </ul>
      </nav>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-navbar": MyNavbar
  }
}
