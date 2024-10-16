import { analyzeArray } from "../src/analyzearray";

test("checks average", () => {
  expect(
    analyzeArray([2, 4, 3]).average
  ).toBe(3)
})
test("checks min", () => {
  expect(
    analyzeArray([2, 4, 3]).min
  ).toBe(2)
})
test("checks max", () => {
  expect(
    analyzeArray([2, 4, 3]).max
  ).toBe(4)
})
test("checks length", () => {
  expect(
    analyzeArray([2, 4, 3]).length
  ).toBe(3)
})