import React from "react"
import { createRoot } from "react-dom/client"
import { Route, Switch } from "wouter"
import { About } from "./pages/About"
import { Counter } from "./pages/Counter"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/404"
import "modern-normalize"
import "styles/globals.scss"

// eslint-disable-next-line
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Switch>
      <Route path="/"><Home title="home"/></Route>
      <Route path="/counter"><Counter title="counter" /></Route>
      <Route path="/about"><About title="about" /></Route>
      <Route><NotFound /></Route>
    </Switch>
  </React.StrictMode>
)
