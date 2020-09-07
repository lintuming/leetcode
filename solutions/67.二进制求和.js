/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function s2(a, b) {
  let ans = "";
  let carry = 0;
  let length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) {
    const v1 = a[a.length - i - 1] ? a[a.length - i - 1] : "0";
    const v2 = b[b.length - i - 1] ? b[b.length - i - 1] : "0";
    const sum = 1 * v1 + 1 * v2 + carry;
    carry = sum / 2 | 0;
    ans = sum % 2  + ans
  }
  if (carry !== 0) {
    ans = carry + ans
  }
  return ans
};

function s1(a, b) {
  let prev = 0;
  const pad = Math.abs(a.length - b.length);
  const preffix = "0".repeat(pad);
  a.length > b.length ? (b = preffix + b) : (a = preffix + a);
  let plus = 0;
  let result = "";
  for (let i = a.length - 1; i >= 0; i--) {
    const aa = a[i];
    const bb = b[i];
    const sum = Number(aa) + Number(bb) + plus;
    plus = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }
  if (plus !== 0) {
    result = plus + result;
  }
  return result;
}
// @lc code=end
console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));
