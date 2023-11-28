const { describe, expect, test } = require("@jest/globals");
const { isPalindrome } = require("./my-valid-palindrome");

describe("is valid palindrome", () => {
  test('"A man, a plan, a canal: Panama" is valid palyndorme', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("race a car is not valid palyndorme", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test("' ' is a valid palyndorme", () => {
    expect(isPalindrome(" ")).toBe(true);
  });
});
