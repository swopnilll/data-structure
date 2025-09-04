let arr = [4, 5, 1, 3, 9];

// [4, 1, 3, 5, *9]

function bubbleSort(arr) {
  let isSwapped = false;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        isSwapped = true;

        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }

    if (!isSwapped) {
      return arr;
    }

    isSwapped = false;
  }

  return arr;
}

let result = bubbleSort(arr);
console.log("Sorted array", result);
