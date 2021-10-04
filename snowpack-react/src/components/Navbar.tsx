import React, { FC } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Navbar: FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/counter">
            <li>Counter</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function Counter() {
  return <h2>Counter</h2>
}

function About() {
  return <h2>About</h2>
}

export default Navbar
