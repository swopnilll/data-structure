// Valid Palindrome

//racecar
function validPalindrome(str) {
  if (!str.length) {
    return true;
  }

  let cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }

    left = left + 1;
    right = right - 1;
  }

  return true;
}

// Test cases
const testCases = [
  { input: "A man, a plan, a canal: Panama", expected: true },
  { input: "race a car", expected: false },
  { input: "Was it a car or a cat I saw?", expected: true },
  { input: "Madam", expected: true },
  { input: "No 'x' in Nixon", expected: true },
  { input: "Mr. Owl ate my metal worm", expected: true },
  { input: "", expected: true },
  { input: "a", expected: true },
  { input: "ab", expected: false },
  { input: "aba", expected: true },
];

console.log("Testing palindrome function:");
testCases.forEach(({ input, expected }) => {
  const result = validPalindrome(input);
  console.log(`Input: '${input}'`);
  console.log(`  Expected: ${expected}`);
  console.log(`  Result: ${result} ${result === expected ? "✅" : "❌"}`);
  console.log();
});
