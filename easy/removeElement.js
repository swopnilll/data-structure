/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //  nums = [0,1,2,2,3,0,4,2]
  //  val = 2

  // nums = [0,1,3,0,4,_,_,_]

  //removed = 1 + 1

  // passed = 1 + 1 + 1 + 1
  // if not, and removed = 0,increment passed,move index

  // if not and removed > 0, insert nums[found]=, increment passed, move index

  // if found, increment removed, replace with _, keep insertindex same, move index

  let removedCount = 0; //1
  let passed = 0;

  let exist;

  for (let i = 0; i < nums.length; i++) {
    exists = nums[i] === val;

    if (!exists && removedCount === 0) {
      passed = passed + 1;
    } else if (!exists && removedCount > 0) {
      nums[passed] = nums[i];
      passed = passed + 1;
      nums[i] = "_";
    } else {
      removedCount = removedCount + 1;
      nums[i] = "_";
    }
  }

  return passed;
};
