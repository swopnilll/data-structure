/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count = count + 1;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }

  return count > max ? count : max;
};
