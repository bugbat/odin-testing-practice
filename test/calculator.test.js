import { calculator } from "../src/calculator";

const calc = calculator();

test("returns correct value for addition", () => {
  expect(calc.add(2, 3)
).toBe(5)
})
test("returns correct value for subtraction", () => {
  expect(calc.subtract(2, 3)
).toBe(-1)
})
test("returns correct value for division", () => {
  expect(calc.divide(9, 3)
).toBe(3)
})
test("returns correct value for multiplication", () => {
  expect(calc.multiply(2, 3)
).toBe(6)
})