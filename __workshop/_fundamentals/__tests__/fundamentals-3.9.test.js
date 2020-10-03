// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  // add more tests here...
  expect(longestWord("hi hello dog monkey cat desk")).toBe("monkey");
  expect(longestWord("phone tablet computer notebook")).toBe("notebook");
  expect(longestWord("eggs bacon cheese milk bun")).toBe("cheese");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
