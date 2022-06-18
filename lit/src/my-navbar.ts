import { html, css, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-navbar")
export class MyNavbar extends LitElement {
  static styles = css`
    nav {
      width: 100vw;
      padding: 1rem 0rem;
      font-weight: 600;
      color: var(--grey-00);
      text-align: center;
      background-color: var(--grey-850);
    }

    a {
      color: var(--grey-000);
      text-decoration: none;
    }

    a:hover {
      color: var(--grey-250);
    }

    ul {
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      padding: 0 2rem;
    }
  `

  render() {
    return html`
      <nav class="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/counter">Counter</a></li>
          <li><a href="/about">About</a></li>
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
