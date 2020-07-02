/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  function recurse(acc, l, r) {
    if (l === 0 && r === 0) {
      return result.push(acc);
    }
    if (l === r) {
      return recurse(acc + "(", l - 1, r);
    }
    if (l > 0) {
      recurse(acc + "(", l - 1, r);
    }
    if (r > 0) {
      recurse(acc + ")", l, r - 1);
    }
  }
  recurse("", n, n);
  return result;
};
// @lc code=end
console.log(generateParenthesis(3));

//(()
