// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["add", 20, 15])).toBe(35);
  expect(calculator(["sub", 20, 8])).toBe(12);
  expect(calculator(["mul", 12, 7])).toBe(84);
  expect(calculator(["div", 30, 3])).toBe(10);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
