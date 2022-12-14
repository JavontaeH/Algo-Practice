// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// slow
var singleNumber = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    let count = 0;
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
};

console.log(singleNumber([2, 2, 1])); // eo: 1
