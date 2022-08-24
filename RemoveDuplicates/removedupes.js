const removeDuplicates = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i + 1] != undefined) {
      index++;
      nums[index - 1] = nums[i];
      nums[index] = nums[i + 1];
    }
  }
  return index + 1;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
