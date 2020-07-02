/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let curState = "start";
  const states = {
    //              number          +/-     e       ' '      点(.)    other
    start:        ["number",      "sign",   "end", "start",     "..",   "end"],
    '..':         ["numberAfter",      "end",    "end",   "end",      "end", "end"],
    number:       ["number",      "end",    "e",   "keepSpace", ".",   "end"],
    sign:         ["number",      "end",    "end", "end",       "end", "end"],
    e:            ["plainNumber", "sign",   "end", "end",       "end", "end"],
    plainNumber:  ["plainNumber", "end",    "end", "keepSpace", "end", "end"],
    'numberAfter':["numberAfter", "end",    "e",   "keepSpace", "end",   "end"],
    ".":          ["numberAfter", "end",    "e",   "keepSpace",  "end", "end"],
    keepSpace:    ["end",         "end",    "end", "keepSpace", "end", "end"],
  };
  function getNextState(char) {
    switch (char) {
      case "+":
      case "-":
        return 1;
      case "e":
        return 2;
      case " ":
        return 3;
      case ".":
        return 4;
      default: {
        if (/[0-9]/.test(char)) {
          return 0;
        }
        return 5;
      }
    }
  }
  for (const char of s) {
    curState = states[curState][getNextState(char)];
    if (curState === "end") return false;
  }
  return (
    curState==="numberAfter"||curState === "number" || curState === "plainNumber" || curState === "."||curState ==='keepSpace'
  );
};
// @lc code=end
// console.log(isNumber("01e"));
// console.log(isNumber("  0.1 "));
// console.log(isNumber("abc"));
// console.log(isNumber("1 a"));
// console.log(isNumber("2e10"));
console.log(isNumber("-90e3"));
console.log(isNumber(" 1e"));
console.log(isNumber("e3"));
console.log(isNumber(" 6e-1"));
console.log(isNumber(' 99e2.5 '));
console.log(isNumber("53.5e93"));
console.log(isNumber(" --6 "));
console.log(isNumber("-+3"));
console.log(isNumber(".e1"));