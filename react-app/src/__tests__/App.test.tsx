import { render, screen } from "@testing-library/react"
import { App } from "../App"
import user from "@testing-library/user-event"

describe("Home", () => {
  it("renders a heading", () => {
    render(<App />)

    const heading = screen.getByRole("heading", {
      name: /welcome to vite.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it("Renders main page correctly", async () => {
    render(<App />)
    const buttonCount = await screen.findByRole("button")

    expect(buttonCount.innerHTML).toBe("Count is: 0")

    await user.click(buttonCount)
    await user.click(buttonCount)

    expect(buttonCount.innerHTML).toBe("Count is: 2")
  })
})
