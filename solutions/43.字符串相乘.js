/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**       2 1 0
 * ------------
 *        1 2 3
 *        4 5 6
 *  -----------
 *        7 3 8
 *      6 1 5
 *    4 9 2
 */

var multiply = function s2(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const ans = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    const base = num1[i];
    const baseIndex = num1.length - i - 1;
    for (let j = num2.length - 1; j >= 0; j--) {
      const r = base * num2[j];
      const index = baseIndex + num2.length - j - 1;
      ans[index] = ans[index] ? ans[index] + r : r;
    }
  }
  for (let i = 0; i < ans.length; i++) {
    const n = ans[i];
    if (n >= 10) {
      ans[i] = n % 10;
      const m = Math.floor(n / 10);
      ans[i + 1] = ans[i + 1] ? ans[i + 1] + m : m;
    }
  }
  return ans.reverse().join("");
};

function s1(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const result = [];
  function plus(index, val) {
    const r = (result[index] || 0) + val;
    if (r < 10) {
      result[index] = r;
    } else {
      const i = r % 10;
      const j = (r / 10) | 0;
      result[index] = i;
      plus(index + 1, j);
    }
  }
  for (let i = num1.length - 1; i >= 0; i--) {
    const m = num1[i];
    for (let j = num2.length - 1; j >= 0; j--) {
      const n = num2[j];
      const index = num1.length - i - 1 + num2.length - j - 1;
      const r = (m * n) % 10;
      const k = ((m * n) / 10) | 0;
      plus(index, m * n);
    }
  }
  return result.reverse().join("");
}
// @lc code=end
console.log(multiply("123", "456"));
