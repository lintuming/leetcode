/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = Array.from({ length: s.length + 1 }, (_, i) =>
    Array.from(
      { length: p.length + 1 },
      (_, j) => (i === s.length && j === p.length ? true : false) // s[s.length] === '' match p[p.length] = ''
    )
  );
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const firstMatch = i < s.length && (s[i] === p[j] || p[j] === "?");
      if (p[j] === "*") {
        // i === s.length 时 s[i] = '' 空字符串 空字符串与多个或零个'*'结尾能match，此时s[i]='',p[j+1]='',所以dp[i][j+1] = true
        // i< s.length 为了防止 *匹配i后面所
        dp[i][j] = dp[i][j + 1] || (i < s.length && dp[i + 1][j]);
      }else{
        dp[i][j] = firstMatch&&dp[i+1][j+1]
      }
    }
  }
  return dp[0][0]
};

// 超时
function solution1(s,p){
  function match(i, j) {
    if (j >= p.length) {
      return i >= s.length;
    }
    const matchFirst = i<s.length&&(s[i] === p[j] || p[j] === "?");
    if (p[j] === "*") {
      return match(i, j + 1) || (i<s.length&&match(i + 1, j));
    } else {
      return matchFirst&&match(i + 1, j + 1);
    }
  }
  return match(0,0)
}

// @lc code=end
console.log(isMatch("cb", "?a"));
console.log(isMatch("aaaaa", "*"));
