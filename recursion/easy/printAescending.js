function printAescending(maxNum, index = 0) {
  if (index > maxNum) {
    return;
  }

  console.log(index);
  printAescending(maxNum, index + 1);
}

printAescending(10, 0);
