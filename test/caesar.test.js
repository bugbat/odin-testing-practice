import { caesarCipher } from "../src/caesar";

test('properly handles overflow from z to a', () => {
  expect(
    caesarCipher("xyz", 3)
  ).toBe("abc")
})
test('properly handles overflow from Z to A', () => {
  expect(
    caesarCipher("XYZ", 3)
  ).toBe("ABC")
})
test('properly handles inclusion of punctuation and numbers', () => {
  expect(
    caesarCipher("1 2 3 4 A.", 3)
  ).toBe("1 2 3 4 D.")
})