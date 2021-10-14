import * as React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Counter from "../Counter"

it("renders the page title with the correct text", () => {
  render(<Counter title="counter" />)

  expect(screen.getByTestId("title")).toHaveTextContent("Counter")
})
