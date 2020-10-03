// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  // add more tests here...
  expect(makeIntoTitle("hello my name is tommy")).toBe(
    "Hello My Name Is Tommy"
  );
  expect(makeIntoTitle("i have a dog named bruce")).toBe(
    "I Have A Dog Named Bruce"
  );
  expect(makeIntoTitle("my favorite sport is hockey")).toBe(
    "My Favorite Sport Is Hockey"
  );
  expect(makeIntoTitle("my favorite color is blue")).toBe(
    "My Favorite Color Is Blue"
  );
});

// More info on jest expect: https://jestjs.io/docs/en/expect
