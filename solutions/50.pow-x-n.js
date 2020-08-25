/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = s1

function s2(x, n) {
  if (n === 0) return 1;
  const signOfN = Math.sign(n);
  n = Math.abs(n);
  const halfN = (n / 2) | 0;
  const rest = n % 2;
  const half = myPow(x, halfN);
  const ans = half * half * (rest === 0 ? 1 : x);
  return (signOfN < 0 ? 1 / ans : ans);
};

function s1(x, n) {
  if (n === 0) return 1;
  const sign = n < 0 ? -1 : 1;
  n = Math.abs(n);
  const isOdd = n % 2 !== 0;
  n = isOdd ? n - 1 : n;
  const half = myPow(x, n / 2);
  const r = half * half * (isOdd ? x : 1);
  return sign === -1 ? 1 / r : r;
}
// @lc code=end
console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
console.log(myPow(-2,2));

