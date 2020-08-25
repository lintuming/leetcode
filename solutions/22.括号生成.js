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
var generateParenthesis = s2;

function s2(n) {
  const ans = [];
  const buffer = [];
  function backTrack(left, right) {
    if (left === 0 && right === 0) {
      return ans.push(buffer.join(''));
    }
    // 两边括号数量相等，只能以左边括号开始
    if (left === right) {
      buffer.push("(");
      backTrack(left - 1, right);
      buffer.pop();
      return;
    }
    if (left > 0) {
      buffer.push("(");
      backTrack(left - 1, right);
      buffer.pop();
    }
    if (right > 0) {
      buffer.push(")");
      backTrack(left, right - 1);
      buffer.pop();
    }
  }
  backTrack(n,n)
  return ans
}

function s1(n) {
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
}
// @lc code=end
console.log(generateParenthesis(3));

//(()
