// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("dog", 2)).toBe("g");
  expect(getLetterAtIndex("monkey", 5)).toBe("y");
  expect(getLetterAtIndex("squirrel", 0)).toBe("s");
  expect(getLetterAtIndex("dolphin", 4)).toBe("h");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
