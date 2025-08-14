function strStr(haystack, needle) {
  let nlength = needle.length; //3
  let hLength = haystack.length; //9

  let compareCheck = 0;

  for (let i = 0; i <= hLength - nlength; i++) {
    for (let j = 0; j < nlength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      compareCheck++;
    }

    if (compareCheck === nlength) {
      return i;
    }

    compareCheck = 0;
  }

  return -1;
}

const check = strStr("sadbutsad", "but");

console.log({ check });
