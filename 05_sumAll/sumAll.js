const sumAll = function (...numbers) {
  for (let number of numbers) {
    if (number < 0 || typeof number !== "number") {
      return "ERROR";
    }
  }

  let smallestNumber = Math.min(...numbers);
  let largestNumber = Math.max(...numbers);
  let sum = 0; // 1, 4 = 1 + 2 + 3 + 4
  for (let i = smallestNumber; i < smallestNumber + largestNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
