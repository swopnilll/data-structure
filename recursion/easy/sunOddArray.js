// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n

function sum(arr, n) {
  if (n === 0) {
    if (arr[0] % 2 !== 0) {
      return arr[0];
    }

    return 0;
  }

  let isOdd = arr[n] % 2 !== 0;

  if (isOdd) {
    return arr[n] + sum(arr, n - 1);
  } else {
    return sum(arr, n - 1);
  }
}

let array = [1, 2, 3, 4, 5];

let arrayOddNumberSum = sum(array, array.length - 1);

console.log(arrayOddNumberSum);
