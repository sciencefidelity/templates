import * as React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home from "../Home"

it("renders the page title with the correct text", () => {
  render(<Home title="home" />)

  expect(screen.getByTestId("title")).toHaveTextContent("Home")
})
