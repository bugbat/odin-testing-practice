export function analyzeArray(arr) {
  const average = arr.reduce((e, curr) => e + curr) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length }
}