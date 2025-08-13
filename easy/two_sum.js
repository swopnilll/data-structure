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

// 2 sum input array sorted; stleast 1 paid is there

function twoSumSortedArray(arr, target) {
  // [2,7,11,15]
  // target = 23

  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    if (arr[left] + arr[right] === target) {
      return [left, right];
    }

    if (arr[left] + arr[right] > target) {
      right--;
    } else {
      left++;
    }
  }
}

// Test function
function runTest(testName, arr, target, expected) {
  const result = twoSumSortedArray(arr, target);
  const passed = JSON.stringify(result) === JSON.stringify(expected);

  console.log(`${testName}: ${passed ? "PASS" : "FAIL"}`);
  console.log(`  Input: arr=[${arr}], target=${target}`);
  console.log(`  Expected: ${JSON.stringify(expected)}`);
  console.log(`  Got: ${JSON.stringify(result)}`);
  console.log("");

  return passed;
}

// Test Cases
console.log("=== TWO SUM SORTED ARRAY TEST CASES ===\n");

// 1. Basic valid cases
runTest("Basic case - sum exists", [2, 7, 11, 15], 9, [0, 1]);
runTest("Sum at beginning and end", [1, 2, 3, 4, 5], 6, [0, 4]);
runTest("Adjacent elements", [1, 2, 3, 4, 5], 5, [1, 2]);
runTest("Middle elements", [1, 2, 3, 4, 5], 7, [2, 3]);

// 2. Edge cases with valid solutions
runTest("Two element array - valid", [1, 3], 4, [0, 1]);
runTest("Same numbers", [3, 3], 6, [0, 1]);
runTest("Large numbers", [100, 200, 300, 400], 500, [1, 2]);

// 3. No solution cases
runTest("Target too small", [2, 7, 11, 15], 1, null);
runTest("Target too large", [2, 7, 11, 15], 30, null);
runTest("Two element array - no solution", [1, 3], 5, null);

// 4. Negative numbers
runTest("With negative numbers", [-3, -1, 0, 2, 5], 3, [1, 4]);
runTest("All negative numbers", [-5, -3, -1], -4, [0, 2]);
runTest("Negative target", [-2, 1, 3, 5], -1, [0, 1]);

// 5. Zeros
runTest("With zeros - positive target", [0, 1, 2, 3], 3, [0, 3]);
runTest("With zeros - zero target", [-1, 0, 1], 0, [0, 2]);
runTest("Multiple zeros", [0, 0, 1, 2], 0, [0, 1]);

// 6. Duplicate numbers
runTest("Duplicates with solution", [1, 2, 2, 3], 4, [0, 3]);
runTest("Duplicates - target is double", [1, 2, 2, 3], 4, [0, 3]);
runTest("Multiple duplicates", [1, 1, 2, 2, 3, 3], 5, [1, 4]);

// 7. Single element (edge case - should return null)
runTest("Single element array", [5], 10, null);

// 8. Your original example
runTest("Original example", [2, 7, 11, 15], 26, [2, 3]);

// 9. Performance test case (larger array)
const largeArr = Array.from({ length: 1000 }, (_, i) => i + 1);
runTest("Large array test", largeArr, 1999, [998, 999]);

console.log("=== TEST SUMMARY ===");
console.log("All test cases completed. Check results above.");

// Additional manual verification
console.log("\n=== MANUAL VERIFICATION EXAMPLES ===");
console.log(
  "twoSumSortedArray([2, 7, 11, 15], 9):",
  twoSumSortedArray([2, 7, 11, 15], 9)
);
console.log(
  "twoSumSortedArray([2, 7, 11, 15], 26):",
  twoSumSortedArray([2, 7, 11, 15], 26)
);
console.log(
  "twoSumSortedArray([1, 2, 3, 4, 5], 10):",
  twoSumSortedArray([1, 2, 3, 4, 5], 10)
);
