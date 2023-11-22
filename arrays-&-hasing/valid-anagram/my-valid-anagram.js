var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const wordsHavingEquivalent = [];

  const sHash = {};
  const tHash = {};

  for (let i = 0; i < s.length; i++) {
    const sWord = s[i];
    const tWord = t[i];

    if (sWord === tWord) {
      wordsHavingEquivalent.push(sWord);
      continue;
    }

    if (tHash[sWord]) {
      wordsHavingEquivalent.push(sWord);
      decrementHashAlphabet(tHash, sWord);
    } else {
      incrementHashAlphabet(sHash, sWord);
    }

    if (sHash[tWord]) {
      wordsHavingEquivalent.push(tWord);
      decrementHashAlphabet(sHash, tWord);
    } else {
      incrementHashAlphabet(tHash, tWord);
    }
  }

  return wordsHavingEquivalent.length === s.length;
};

function decrementHashAlphabet(hash, alphabet) {
  if (hash[alphabet]) {
    hash[alphabet] -= 1;
  }
}

function incrementHashAlphabet(hash, alphabet) {
  if (!isNaN(hash[alphabet])) {
    hash[alphabet] += 1;
  } else {
    hash[alphabet] = 1;
  }
}

console.log(isAnagram("car", "rat"));
