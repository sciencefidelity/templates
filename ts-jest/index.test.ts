import { fib } from "./index"

test("Fibonacci number 0", () => {
  expect(fib(0)).toEqual(0)
})

test("Fibonacci number 1", () => {
  expect(fib(1)).toEqual(1)
})

test("Fibonacci number 2", () => {
  expect(fib(2)).toEqual(1)
})

test("Fibonacci number 3", () => {
  expect(fib(3)).toEqual(2)
})

test("Fibonacci number 4", () => {
  expect(fib(4)).toEqual(3)
})

test("Fibonacci number 5", () => {
  expect(fib(5)).toEqual(5)
})

test("Fibonacci number 6", () => {
  expect(fib(6)).toEqual(8)
})

test("Fibonacci number 7", () => {
  expect(fib(7)).toEqual(13)
})

test("Fibonacci number 8", () => {
  expect(fib(8)).toEqual(21)
})

test("Fibonacci number 9", () => {
  expect(fib(9)).toEqual(34)
})

test("Fibonacci number 10", () => {
  expect(fib(10)).toEqual(55)
})
