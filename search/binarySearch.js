/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // [-1,*0,3,5,9,12,14,16,18,22,25,28]

  //target = -1

  let length = nums.length;
  // 12

  let left = 0;
  // 0

  let right = length - 1;
  // 11

  let mid;
  // 6

  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);

    // 6

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
