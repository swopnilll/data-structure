/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let checkObj = {};

  // [1,2,3,1]

  for (let num of nums) {
    if (checkObj[num] === undefined) {
      checkObj[num] = 1;
    } else {
      return true;
    }
  }

  return false;
};
