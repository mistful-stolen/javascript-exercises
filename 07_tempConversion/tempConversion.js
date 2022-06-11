const ftoc = function (fahrenheit) {
  //[°C] = ([°F] − 32) × 5⁄9
  let result = ((fahrenheit - 32) * 5) / 9;
  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function (celsius) {
  //[°F] = [°C] × 9⁄5 + 32
  let result = (celsius * 9) / 5 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
