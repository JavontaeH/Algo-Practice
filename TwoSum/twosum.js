/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

// slow version
const nums = [3, 2, 4];
var twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let index = arr.findIndex(
      (element) => arr.indexOf(element) !== i && element + arr[i] === target
    );

    if (index !== -1) {
      return [i, index];
    }
  }
};

console.log(twoSum(nums, 6));
