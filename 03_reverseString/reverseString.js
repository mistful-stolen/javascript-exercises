const reverseString = function (string) {
  let splitUpArray = [];
  splitUpArray = string.split("");
  splitUpArray.reverse();
  let result = splitUpArray.join("");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
