// Reverse String

// swopnil
function reverseString(str) {
  let newStr = "";

  for (let char of str) {
    newStr = char + newStr;
  }

  return newStr;
}

function reverseStringBI(str) {
  return str.split("").reverse().join("");
}

const reversedString = reverseStringBI("Swopnil");

console.log(reversedString);
