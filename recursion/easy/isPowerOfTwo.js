// Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

function isPowerOfTwo(n) {
  if (n < 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  if (n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}

const isIt = isPowerOfTwo(8);

console.log(isIt);
