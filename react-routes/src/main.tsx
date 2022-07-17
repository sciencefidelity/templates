import React from "react"
import { createRoot } from "react-dom/client"
import { Route, Switch } from "wouter"
import { About } from "pages/about"
import { Counter } from "pages/counter"
import { Home } from "pages/home"
import { NotFound } from "pages/404"
import "modern-normalize"
import "styles/globals.scss"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Switch>
      <Route path="/">
        <Home title="home" />
      </Route>
      <Route path="/counter">
        <Counter title="counter" />
      </Route>
      <Route path="/about">
        <About title="about" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </React.StrictMode>
)
