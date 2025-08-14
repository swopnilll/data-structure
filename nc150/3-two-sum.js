/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //    [2,7,11,15]
  // 9
  let checkObj = {};

  let check;

  for (let num in nums) {
    check = target - nums[num];

    if (checkObj[check] !== undefined) {
      return [checkObj[check], Number(num)];
    }

    checkObj[nums[num]] = Number(num);
  }
};
