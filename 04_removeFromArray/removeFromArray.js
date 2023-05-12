const removeFromArray = function (arr, ...args) {
  let array = [];
  arr.forEach((item) => {
    if (!args.includes(item)) {
      array.push(item);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
