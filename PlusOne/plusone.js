//slow but no memory usage
var plusOne = function (digits) {
  let last = 0;
  for (var i = digits.length - 1; i >= 0; i--) {
    if (last === 0) {
      digits[i] += 1;
    }
    if (digits[i] === 10) {
      digits[i] = 0;
      last = 0;
    } else {
      last = 1;
    }
  }
  if (last === 0) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([9, 9]));
