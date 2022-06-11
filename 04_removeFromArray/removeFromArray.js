const removeFromArray = function (givenArray, ...numbers) {
  let array = givenArray;

  for (let number of numbers) {
    let indexOfNumber = array.indexOf(number);
    array.splice(indexOfNumber, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
