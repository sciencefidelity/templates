import { render, screen } from "@testing-library/react"
import Home from "../pages/index"
import user from "@testing-library/user-event"
import "@testing-library/jest-dom"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("Renders main page correctly", async () => {
    render(<Home />)
    const buttonCount = await screen.findByRole("button")

    expect(buttonCount.innerHTML).toBe("Count is: 0")

    await user.click(buttonCount)
    await user.click(buttonCount)

    expect(buttonCount.innerHTML).toBe("Count is: 2")
  })
})
