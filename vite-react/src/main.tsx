import React from "react"
import { createRoot } from "react-dom/client"
import { Router } from "@reach/router"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/globals.scss"
import About from "pages/About"
import Counter from "pages/Counter"
import Home from "pages/Home"
import NotFound from "pages/404"

const container = document.getElementById("app")
// eslint-disable-next-line
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Router>
      <Home path="/" title="home" />
      <Counter path="/counter" title="counter" />
      <About path="/about" title="about" />
      <NotFound default />
    </Router>
  </React.StrictMode>
)

