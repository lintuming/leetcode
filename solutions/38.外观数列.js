/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const cache = [];
var countAndSay = function s2(n) {
  if (n === 1) return "1";
  if (cache[n - 1]) {
    return cache[n - 1];
  }
  const prev = countAndSay(n - 1);
  let ans = "";
  for (let i = 0; i < prev.length; i++) {
    let count = 1;
    while (i + 1 < prev.length && prev[i] === prev[i + 1]) {
      i++;
      count++;
    }
    ans += `${count}${prev[i]}`;
  }
  prev[n - 1] = ans;
  return ans;
};

function s1(n) {
  if (n === 1) return "1";
  let prev = "1";
  for (let i = 2; i <= n; i++) {
    let result = "";
    let count = 1;
    for (let j = 0; j < prev.length; j++) {
      if (prev[j] === prev[j + 1]) {
        count++;
        continue;
      }
      result += count + prev[j];
      count = 1;
    }
    prev = result;
  }
  return prev;
}
// @lc code=end
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
