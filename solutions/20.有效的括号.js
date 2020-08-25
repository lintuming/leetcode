/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const match = {
  "(": ")",
  "[": "]",
  "{": "}",
};
var isValid = function s2(s){
  const stack = [];
  let i = 0;

  for (let i = 0; i < s.length; i++) {
    const parenthess = s[i];
    if(parenthess === ')' || parenthess === '}' || parenthess === ']') {
      const parenthessBefore = stack.pop();
      if(match[parenthessBefore] !== parenthess) {
        return false
      }
    } else {
      stack.push(parenthess)
    }
  }
  return stack.length === 0
}

function expect (args,value) {
  console.log(isValid(args) === value)
  return isValid(args) === value
}
expect('',false);
expect('()[]{}',true);
expect('(]',false);
expect('([(]))',false)




function s1(s) {
  const stack = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (match[c]) {
      stack.push(c);
    } else {
      const poped = stack.pop();
      if (match[poped] !== c) {
        return false;
      }
    }
    i++
  }
  return stack.length === 0
};
// @lc code=end
