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

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesTwo = function (nums) {
  let write = 0;

  // [0,0,1]

  // iterate with i = 1
  // compare i with i - 1

  // if arr[i] !== 0 && arr[write] === 0 arr[write]= arr[i], arr[i] = 0; write++;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0 && nums[i - 1] === 0) {
      nums[write] = nums[i];
      nums[i] = 0;
      write++;
    } else if (nums[i - 1] !== 0) {
      write++;
    }
  }
};

let moveZeroSimple = (nums) => {
  let write = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[write] = num;
      write++;
    }
  }

  console.log(nums);

  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }

  console.log(nums);
};

moveZeroSimple([0, 1, 0, 3, 12]);
