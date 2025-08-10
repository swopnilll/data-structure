function printDescending(num) {
  if (num === 0) {
    return;
  }

  console.log(num);
  printDescending(num - 1);
}

printDescending(10);
