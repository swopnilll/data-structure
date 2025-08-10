// 0 1 1 2 3 5 8 13 21 34 55 89 144
// Write a recursive function fib(n) that returns the nth Fibonacci number.

function fib(n) {
  if (n < 0) {
    return -1; // Invalid input
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

const fibonacciNumber = fib(10);

console.log(fibonacciNumber); // Output: 55
