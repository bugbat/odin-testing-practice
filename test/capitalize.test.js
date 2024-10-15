import { capitalize } from "../src/capitalize.js";

test('properly capitalizes first letter of string', () => {
  expect(
    capitalize("test string")
  ).toBe("Test string")
})