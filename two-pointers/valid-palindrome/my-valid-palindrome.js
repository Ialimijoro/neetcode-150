const lowerCaseAlphaNumericRegex = /[a-z0-9]/;

function isPalindrome(s) {
  const lowerCaseString = s.toLowerCase();

  if (lowerCaseString === "" || lowerCaseString === " ") {
    return true;
  }

  let startPointer = 0;
  let endPointer = lowerCaseString.length - 1;

  while (startPointer < endPointer) {
    const startChar = lowerCaseString[startPointer];
    const endChar = lowerCaseString[endPointer];

    if (!startChar.match(lowerCaseAlphaNumericRegex)) {
      startPointer++;
    } else if (!endChar.match(lowerCaseAlphaNumericRegex)) {
      endPointer--;
    } else if (startChar !== endChar) {
      return false;
    } else {
      startPointer++;
      endPointer--;
    }
  }

  return true;
}

module.exports = {
  isPalindrome,
};
