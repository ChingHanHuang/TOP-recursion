const fib = require("./fib");

test("Passing in 1 returns [0]", () => {
  expect(fib(1)).toEqual([0]);
});
test("Passing in 2 returns [0, 1]", () => {
  expect(fib(2)).toEqual([0, 1]);
});
test("Return correct fibonacci sequence", () => {
  expect(fib(6)).toEqual([0, 1, 1, 2, 3, 5]);
});
test("Return 'Invalid parameter' if 0 is passed in", () => {
  expect(fib(0)).toEqual("Invalid parameter");
});
test("Return 'Invalid parameter' if negative number is passed in", () => {
  expect(fib(-2)).toEqual("Invalid parameter");
});
test("Return 'Invalid parameter' if non-number is passed in", () => {
  expect(fib("d")).toEqual("Invalid parameter");
});
