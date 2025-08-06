// Generate number to 1 recursively
function generateNtoOne(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  generateNtoOne(n - 1);
}

// generateNtoOne(100);

// Generate number from 1 to n recursively
function generateOneToNth(n, index) {
  if (index > n) {
    return;
  }

  console.log(index);
  index = index + 1;
  generateOneToNth(n, index);
}

// generateOneToNth(100, 1);

// Sum of First N Natural Numbers
// Sum of First N Natural Numbers
// 1 + 2 + 3 + 4 + 5 + ...n
function sum(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}
// sum(5);

// 2. Factorial of a Number
// Compute the factorial of n: n! = n * (n - 1) * ... * 1

// 5 * 4 * 3 * 2 * 1

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

const fact = factorial(5);

// factorial(5)
// 5 * f(4)
// 4 * f(3)
// 3 * f(2)
// 2 * f(1)

console.log(fact);

// 3. Print Array Elements Recursively
// Given an array, print all elements one by one using recursion.

function printArray(arr, index = 0) {
  if (index === arr.length) {
    return;
  }

  console.log(arr[index]);
  printArray(arr, index + 1);
}

// printArray([1, 2, 3, 4, 5, 6, 7], 0);

// 4. Reverse Print Array Elements Recursively
function reversePrintArray(arr, index) {
  if (index < 0) {
    return;
  }

  console.log(arr[index]);

  let updatedIndex = index - 1;
  reversePrintArray(arr, updatedIndex);
}

let arr = [1, 2, 3, 4, 5];
reversePrintArray(arr, arr.length - 1);

// 5. Check if a String is a Palindrome
// Check if the string reads the same backward using recursion.

//racecar
function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left > right) {
    return true;
  }

  if (str.charAt(left) !== str.charAt(right)) {
    return false;
  }

  let uleft = left + 1;
  let uright = right - 1;

  return isPalindrome(str, uleft, uright);
}

let str = "racecar";
const is = isPalindrome(str);

console.log(is);

// 6. Calculate Power(x ^ n)
// Write a recursive function to compute x raised to power n.

//  2 power 3

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  return x * power(x, n - 1);
}

let x = 2;
let n = 0;

const total = power(x, n);

console.log(total);
