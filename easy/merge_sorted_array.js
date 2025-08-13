/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let firstP = m - 1; //2
  let secondP = n - 1; //2

  let insertP = m + n - 1; //5

  while (insertP >= 0 && firstP >= 0 && secondP >= 0) {
    if (nums2[secondP] > nums1[firstP]) {
      nums1[insertP] = nums2[secondP];
      insertP = insertP - 1; //3
      secondP = secondP - 1; //0
    } else {
      nums1[insertP] = nums1[firstP];
      insertP = insertP - 1;
      firstP = firstP - 1;
      2;
    }
  }

  while (secondP >= 0) {
    nums1[insertP] = nums2[secondP];
    insertP--;
    secondP--;
  }
};
