/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function s2(digits) {
  const charCodeA = "a".charCodeAt();
  const entries = [
    [2, 0],
    [3, 3],
    [4, 6],
    [5, 9],
    [6, 12],
    [7, 15],
    [8, , 19],
    [9, charCodeA, 3],
  ];
  const ans = [];
  if (digits.length === 0) return ans;
  
  function recurse(){}
};

function s1(digits) {
  const result = [];
  if (digits.length === 0) return result;
  const mapping = {
    2: "a".charCodeAt(),
    3: "d".charCodeAt(),
    4: "g".charCodeAt(),
    5: "j".charCodeAt(),
    6: "m".charCodeAt(),
    7: "p".charCodeAt(),
    8: "t".charCodeAt(),
    9: "w".charCodeAt(),
  };

  function recurse(d, acc) {
    if (d.length === 0) {
      result.push(acc);
      return;
    }
    const num = d[0];
    const len = num === "7" || num === "9" ? 4 : 3;
    for (let j = 0; j < len; j++) {
      recurse(d.slice(1), acc + String.fromCharCode(mapping[num] + j));
    }
  }
  recurse(digits, "");
  return result;
}
// @lc code=end

console.log(letterCombinations("23"));
/**
 *
 *  233
 *      d
 *  a   e
 *      f
 *
 *  b
 *  c
 *
 *
 *
 *
 *
 */
