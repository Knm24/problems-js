const { describe, expect, test } = require("@jest/globals");
const removeABC = require("./index");

describe("exercise1 - problem5", () => {
  test.each([
    { text: "This might be a bit hard", expected: "This might e  it hrd" },
    { text: "This is awesome", expected: "This is wesome" },
    { text: "hello world!", expected: null },
    {
      text: "coding is fun!",
      expected: "oding is fun!",
    },
    { text: "", expected: null },
  ])('.removeABC("$text")', ({ text, expected }) => {
    expect(removeABC(text)).toBe(expected);
  });
});
