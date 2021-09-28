import { Kata } from "./index"

test("reverse words longer than 5 letters", () => {
  expect(Kata.spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw")
})
