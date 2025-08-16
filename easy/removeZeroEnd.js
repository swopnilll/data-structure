/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //[0,1,0,3,12]

  //[1,3,12,0,0]

  // if not zero; replace insert index with loop index, insertIndex++

  // if zero; loop ahead

  let insertIndex = 0;

  let temp;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[insertIndex];
      nums[insertIndex] = nums[i];
      nums[i] = temp;
      insertIndex++;
    }
  }
};
