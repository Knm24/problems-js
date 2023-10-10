const { describe, expect, test } = require("@jest/globals");
const move = require("./index");

describe("exercise1 - problem10", () => {
  test.each([
    { text: "hello", expected: "ifmmp" },
    { text: "lol", expected: "mpm" },
    { text: "bye", expected: "czf" },
  ])(".move($text)", ({ text, expected }) => {
    expect(move(text)).toBe(expected);
  });
});
