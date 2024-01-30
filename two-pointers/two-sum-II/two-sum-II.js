var twoSum = function (numbers, target) {
  let index1 = 0;
  let index2 = numbers.length - 1;

  let sum = numbers[index1] + numbers[index2];

  while (sum !== target) {
    if (sum < target) {
      index1++;
      sum = numbers[index1] + numbers[index2];
    } else if (sum > target) {
      index2--;
      sum = numbers[index1] + numbers[index2];
    } else {
      break;
    }
  }

  return [index1 + 1, index2 + 1];
};
