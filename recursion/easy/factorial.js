// Write a recursive function fact(n) that returns the factorial of a number n.

// 5 * 4 * 3 * 2 * 1
function factorial(n) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

const result = factorial(10);

console.log(result);
