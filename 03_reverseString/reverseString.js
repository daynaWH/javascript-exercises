const reverseString = function (string) {
  let splitString = string.split('');
  let reverseString = splitString.reverse('');
  let resultString = reverseString.join('');
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
