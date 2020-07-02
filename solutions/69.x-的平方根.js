/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function s3(x) {
  return Math.pow(x, 1 / 2)|0;
};

function s2(x) {
  if (x === 0 || x === 1) return x;
  let left = 1,
    right = Math.ceil(x / 2);
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return right;
}

//
function s1(x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  const halt = Math.floor(x / 2);
  for (let i = 2; i <= halt + 1; i++) {
    const pow = i * i;
    if (pow === x) {
      return i;
    } else if (pow > x) {
      return i - 1;
    }
  }
  return 1;
}
// @lc code=end
console.log(mySqrt(5));
console.log(mySqrt(8));
console.log(mySqrt(4));
console.log(mySqrt(1));
console.log(mySqrt(0));

