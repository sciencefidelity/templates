import * as React from "react"
import { render } from "@testing-library/react"
import { expect } from "chai"
import App from "@/pages/index"

describe("<App>", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Create-React-Snowpack-App/i)
    expect(document.body.contains(linkElement))
  })
})
