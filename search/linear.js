let arr = [4, 5, 1, 3, 9];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const index = linearSearch(arr, 3);

console.log({ index });
