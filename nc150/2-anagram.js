/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let checkObj = {};
  // checkObj = {a: 2,c: 0}

  for (let i = 0; i < s.length; i++) {
    checkObj[s[i]] = checkObj[s[i]] === undefined ? 1 : checkObj[s[i]] + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (checkObj[t[i]] === undefined) {
      return false;
    } else if (checkObj[t[i]] > 0) {
      checkObj[t[i]] = checkObj[t[i]] - 1;
    } else if (checkObj[t[i]] === 0) {
      return false;
    }
  }

  return true;
};
