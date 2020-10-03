// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([5, 5, 5])).toBe(15);
  expect(sum([7, 2, 10])).toBe(19);
  expect(sum([4, 4, -2])).toBe(6);
  expect(sum([20, 20, 2])).toBe(42);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
