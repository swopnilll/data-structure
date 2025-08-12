//  Remove Duplicates from Sorted Array(Two Pointers)

// nums = [0,1,1,2,3,4,5,6,7,7,7,8,8,8,8,9,9]
// [0,0,1,1,2,2,3,4,5 ....]
// insertIndex = 1
// readIndex = 2
function removeDuplicateSortedArray(nums) {
  let insertIndex = 1;

  for (let readIndex = 1; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== nums[readIndex - 1]) {
      nums[insertIndex] = nums[readIndex];
      insertIndex = insertIndex + 1;
    }
  }

  return nums.slice(0, insertIndex);
}

const newArray = removeDuplicateSortedArray([
  0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9,
]);

console.log(newArray);
