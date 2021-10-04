import React, { FC } from "react"

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/counter">
          <li>Counter</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
