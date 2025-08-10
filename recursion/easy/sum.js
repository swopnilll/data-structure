// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

// n = 5
// sum = 5 + 4 + 3 + 2 + 1
function sum(n) {
  if (n === 0) {
    return 0;
  }

  return n + sum(n - 1);
}

// Test Cases
console.log("=== Test Cases for Recursive Sum Function ===\n");

// Test Case 1: Base case
console.log("Test 1 - Base case (n = 0):");
console.log(`sum(0) = ${sum(0)}`);
console.log(`Expected: 0\n`);

// Test Case 2: Small positive numbers
console.log("Test 2 - Small positive numbers:");
console.log(`sum(1) = ${sum(1)} (Expected: 1)`);
console.log(`sum(2) = ${sum(2)} (Expected: 3)`);
console.log(`sum(3) = ${sum(3)} (Expected: 6)`);
console.log(`sum(4) = ${sum(4)} (Expected: 10)`);
console.log(`sum(5) = ${sum(5)} (Expected: 15)\n`);

// Test Case 3: Larger numbers
console.log("Test 3 - Larger numbers:");
console.log(`sum(10) = ${sum(10)} (Expected: 55)`);
console.log(`sum(15) = ${sum(15)} (Expected: 120)`);
console.log(`sum(20) = ${sum(20)} (Expected: 210)\n`);

// Test Case 4: Verify with mathematical formula n(n+1)/2
console.log("Test 4 - Verification with formula n(n+1)/2:");
function verifySum(n) {
  const recursiveResult = sum(n);
  const formulaResult = (n * (n + 1)) / 2;
  const isCorrect = recursiveResult === formulaResult;

  console.log(
    `n = ${n}: Recursive = ${recursiveResult}, Formula = ${formulaResult}, Correct: ${isCorrect}`
  );
  return isCorrect;
}

const testValues = [0, 1, 5, 10, 25, 50];
testValues.forEach(verifySum);

console.log("\n=== Edge Cases ===");

// Test Case 5: Edge cases and potential issues
console.log("Test 5 - Negative numbers (should be handled carefully):");
try {
  console.log(
    "Note: This implementation will cause stack overflow for negative numbers"
  );
  console.log(
    "Consider adding validation: if (n < 0) return 0; or throw error"
  );
  // Uncomment to test (will cause stack overflow):
  // console.log(`sum(-1) = ${sum(-1)}`);
} catch (error) {
  console.log(`Error with negative input: ${error.message}`);
}

// Test Case 6: Performance test (stack depth)
console.log("\nTest 6 - Stack depth considerations:");
console.log(
  "For large values (e.g., sum(1000)), this may cause stack overflow"
);
console.log("Consider iterative approach for production use with large inputs");

// Enhanced version with input validation
console.log("\n=== Enhanced Version with Validation ===");

function sumWithValidation(n) {
  // Input validation
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Input must be an integer");
  }

  if (n < 0) {
    throw new Error("Input must be non-negative");
  }

  // Base case
  if (n === 0) {
    return 0;
  }

  // Recursive case
  return n + sumWithValidation(n - 1);
}

console.log("Enhanced function tests:");
console.log(`sumWithValidation(5) = ${sumWithValidation(5)}`);

try {
  sumWithValidation(-1);
} catch (error) {
  console.log(`Negative input error: ${error.message}`);
}

try {
  sumWithValidation(3.5);
} catch (error) {
  console.log(`Non-integer input error: ${error.message}`);
}

try {
  sumWithValidation("5");
} catch (error) {
  console.log(`String input error: ${error.message}`);
}
