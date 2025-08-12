// Pattern 1: Two Sum

// num = [1,2,3,4,5]
// target 7

// {1: 1, 2: 2, 3:3, 4: 4, 5:5}
function twoSum(nums, target) {
  let checkObj = {};

  let actualNumber;

  for (let index in nums) {
    actualNumber = nums[index];

    if (checkObj[target - actualNumber]) {
      return [Number(index), checkObj[target - actualNumber]];
    }

    checkObj[actualNumber] = Number(index);
  }

  return [];
}

const two = twoSum([1, 2, 3, 4, 5], 9);
console.log(two);
