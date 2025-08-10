// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

function sum(arr, n) {
  if (arr.length === 0) return 0;

  if (n === 0) return arr[0];

  return arr[n] + sum(arr, n - 1);
}

let array = [1, 2, 3, 4, 5];
const arraySum = sum(array, array.length - 1);

console.log(arraySum);
