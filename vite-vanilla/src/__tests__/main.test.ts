import { screen } from "@testing-library/dom"
import { add } from "../main"

document.body.innerHTML = `
  <h1 data-testid="greeting">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank" data-testid="link">Documentation</a>
`

it("adds 2 plus 2 and returns 4", () => {
  expect(add(2, 2)).toEqual(4)
})

it("renders the welcome message", async () => {
  expect(screen.getByTestId("greeting")).toBeInTheDocument()
})

it("renders the link to the Vite docs", async () => {
  expect(screen.getByTestId("link")).toBeInTheDocument()
})
