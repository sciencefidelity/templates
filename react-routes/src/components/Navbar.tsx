import { FC } from "react"
import { Link } from "wouter"

export const Navbar: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link to="/counter">
            <a>
              <li>Counter</li>
            </a>
          </Link>
          <Link to="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
