// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// abcd*e t
// ac*e  s
// aec false

function isSubsequence(s, t) {
  let char = "";
  let count = 0;
  // 5

  let isFound = false;

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    // e

    while (count < t.length) {
      if (t[count] === char) {
        count++;
        isFound = true;
        break;
      }

      count++;
    }

    if (!isFound) {
      return false;
    }

    isFound = false;
  }

  return true;
}

const is = isSubsequence("aec", "abcde");

// Original test
console.log(isSubsequence("aec", "abcde")); // false

// ✅ Additional test cases
console.log(isSubsequence("abc", "abcde")); // true - all letters appear in order
console.log(isSubsequence("ace", "abcde")); // true - skipping 'b' and 'd'
console.log(isSubsequence("aec", "abcde")); // false - 'e' comes after 'c'
console.log(isSubsequence("", "abcde")); // true - empty string is always subsequence
console.log(isSubsequence("a", "a")); // true - single character match
console.log(isSubsequence("a", "b")); // false - single character mismatch
console.log(isSubsequence("abc", "acb")); // false - order is wrong
console.log(isSubsequence("aceg", "abcdefgh")); // true - can skip multiple chars
console.log(isSubsequence("gfh", "abcdefgh")); // false - 'f' before 'g' in t
console.log(isSubsequence("xyz", "")); // false - t is empty
