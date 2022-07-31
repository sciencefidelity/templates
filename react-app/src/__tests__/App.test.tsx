import { render, screen } from "@testing-library/react"
import { App } from "../App"
import user from "@testing-library/user-event"

test("Renders main page correctly", async () => {
  render(<App />)
  const buttonCount = await screen.findByRole("button")
  const codeCount = screen.queryByText(/The count is now:/)

  expect(buttonCount.innerHTML).toBe("Count is: 0")
  expect(codeCount).not.toBeInTheDocument()

  await user.click(buttonCount)
  await user.click(buttonCount)

  expect(buttonCount.innerHTML).toBe("Count is: 2")
  expect(screen.queryByText(/The count is now:/)).toBeInTheDocument()
})
