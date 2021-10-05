import * as React from "react"
import { render } from "@testing-library/react"
import { expect } from "chai"
import Counter from "@/pages/Home"

describe("<App>", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<Counter title="counter" />)
    const linkElement = getByText(/Create-React-Snowpack-App/i)
    expect(document.body.contains(linkElement))
  })
})
