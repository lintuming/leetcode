/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.every((num) => num === 0)) return "0";
  nums.sort((a, b) => {
    a = a + "";
    b = b + "";
    if (a[0] === b[0]) {
      if (a + b > b + a) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return b[0] - a[0];
    }
  });
  return nums.join("");
};
// @lc code=end
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));

console.log(largestNumber([3, 30, 34, 5, 9, 901]));
console.log(largestNumber([0,0,0]));
