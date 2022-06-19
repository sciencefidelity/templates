import React from "react"
import { createRoot } from "react-dom/client"
import { Route, Switch } from "wouter"
import "modern-normalize"
import "styles/global.scss"
import About from "pages/About"
import Counter from "pages/Counter"
import Home from "pages/Home"
import NotFound from "pages/404"

const container = document.getElementById("root")
// eslint-disable-next-line
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Switch>
      <Route path="/"><Home title="home"/></Route>
      <Route path="/counter"><Counter title="counter" /></Route>
      <Route path="/about"><About title="about" /></Route>
      <Route><NotFound /></Route>
    </Switch>
  </React.StrictMode>
)
