import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app"
import "styles/globals.css"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
