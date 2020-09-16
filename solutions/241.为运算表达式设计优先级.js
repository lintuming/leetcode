/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {

  const ans = [];
  function perform(op, leftExprs, rightExprs) {
    for (let i = 0; i < leftExprs.length; i++) {
      for (let j = 0; j < rightExprs.length; j++) {
        let res;
        let l = leftExprs[i];
        let r = rightExprs[j];
        switch (op) {
          case "-":
            ans.push(l - r);
            break;
          case "+":
            ans.push(1 * l + 1 * r);
            break;
          case "*":
            ans.push(l * r);
            break;
        }
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    switch (char) {
      case "-":
      case "+":
      case "*": {
        const leftExprs = diffWaysToCompute(input.slice(0, i));
        const rightExprs = diffWaysToCompute(input.slice(i + 1));
        perform(char, leftExprs, rightExprs);
      }
    }
  }
  if ( ans.length === 0) {
    ans.push(1*input)
  }
  return ans
};
// @lc code=end
console.log(diffWaysToCompute("2*3-4*5"))
console.log(diffWaysToCompute("11"))
