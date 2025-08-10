// Write a Program that defines a function to calculate the sum of two integers and prints the result.Call this function by passing two integer values.

function sumOfInteger(num1, num2) {
  let sum = num1 + num2;

  console.log(sum);
}

// sumOfInteger(1, 2)

// Write a function that takes an integer and returns its square.Call this function and prints the result.Square(x) is a function that computes the square of a number.It returns the result instead of printing it.

function square(x) {
  return x * x;
}

const result = square(4);
// console.log(result)

// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.

function checkIfElligibleToVote(age) {
  return age >= 18;
}

// Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

function checkIfEven(number) {
  return number % 2 === 0 ? true : false;
}

// Write a program to print all even numbers from an array.

function printEvenNumbersInAnArray(arr) {
  for (let elem of arr) {
    if (elem % 2 === 0) {
      console.log(elem);
    }
  }
}
// printEvenNumbersInAnArray([1,2,3,4,5,6,7,8])

// Write a function that returns the number of negative numbers in an array.

function getNumberOfNegativeNumbersInArray(arr) {
  let count = 0;

  for (let elem of arr) {
    if (elem < 0) {
      count = count + 1;
    }
  }

  return count;
}

const negativeCount = getNumberOfNegativeNumbersInArray([0, -1, 1, 2, -3]);

// console.log(negativeCount)

// Write a function that returns the smallest number in an array.

function getSmallestNumber(arr) {
  let smallest = Infinity;

  for (let elem of arr) {
    if (elem < smallest) {
      smallest = elem;
    }
  }

  return smallest;
}

const smallestNumber = getSmallestNumber([1, 2, 3, -10, -5, 0]);

// console.log(smallestNumber);

// Write a function that returns the largest number in an array.

function findLargestNumberInAnArray(arr) {
  let largest = -Infinity;

  for (let elem of arr) {
    if (elem > largest) {
      largest = elem;
    }
  }

  return largest;
}

const largestNumber = findLargestNumberInAnArray([0, 1, 2, 3, 100, 4, 5, 6, 8]);

// console.log(largestNumber);

// Write a function secondLargest(arr) that returns the second largest distinct number in an array.

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) {
    console.log("array should have atleast 2 elements");
    return 0;
  }

  for (let elem of arr) {
    if (elem > secondLargest) {
      if (elem > largest) {
        secondLargest = largest;
        largest = elem;
      } else {
        secondLargest = elem;
      }
    }
  }

  if (largest === secondLargest) {
    console.log("No Second Largest Found");
    return 0;
  }

  return secondLargest;
}

let num = secondLargest([4, 4]);

console.log(num);
