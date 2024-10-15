export function reverse(str) {
  let reversed = "";
  for (const c of str) {
    reversed = c + reversed;
  }
  return reversed;
}