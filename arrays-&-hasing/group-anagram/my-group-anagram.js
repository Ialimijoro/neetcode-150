var groupAnagrams = function (strs) {
  if (!strs.length) {
    return [[""]];
  }

  // will contain something like { 'a1b0c0' }
  const anagramHash = {};

  strs.forEach((str) => {
    const countedCharacter = mapStringToHashCount(str);

    if (anagramHash[countedCharacter]) {
      anagramHash[countedCharacter].push(str);
    } else {
      anagramHash[countedCharacter] = [str];
    }
  });

  return Object.values(anagramHash);
};

function mapStringToHashCount(str) {
  const alhapbets = "abcdefghijklmnopqrstuvwxyz";

  const alphabetCounterHash = {};

  for (let i = 0; i < alhapbets.length; i++) {
    const alphabet = alhapbets[i];
    alphabetCounterHash[alphabet] = 0;
  }

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    alphabetCounterHash[character] += 1;
  }

  let result = "";

  Object.entries(alphabetCounterHash).forEach(([alphabet, alphabetCount]) => {
    result += `${alphabet}${alphabetCount}`;
  });

  return result;
}

module.exports = {
  groupAnagrams,
};
