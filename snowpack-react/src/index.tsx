import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "@/styles/globals.scss"
import Home from "@/pages/Home"
import Counter from "@/pages/Counter"
import About from "@/pages/About"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" title="home" />
      <Counter path="/counter" title="counter" />
      <About path="/about" title="about" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
