const ms = require("./mergeSort");

test("Passing in an array with only one member returns the same array", () => {
  expect(ms([5])).toEqual([5]);
});
test("Odd array gets sorted correctly", () => {
  expect(ms([5, 3, 4])).toEqual([3, 4, 5]);
});
test("Even array gets sorted correctly", () => {
  expect(ms([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
test("Even array gets sorted correctly", () => {
  expect(ms([3, 4, 4, 1, 7, 8])).toEqual([1, 3, 4, 4, 7, 8]);
});
test("Passing in non-array value returns 'Invalid Parameter'", () => {
  expect(ms(9)).toEqual(
    "Invalid Parameter, please pass in an array of numbers"
  );
});
test("Passing in an array of non-numbers returns 'Invalid Parameter", () => {
  expect(ms(["H"])).toEqual(
    "Invalid Parameter, please pass in an array of numbers"
  );
});
