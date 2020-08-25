/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// similar: 44
var isMatch = s4;

function s4(s, p) {
  const dp = Array.from({ length: s.length + 1 }, () => []);
  dp[0][0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          ((s[i - 1] === p[j - 2] || p[j - 2] === ".") &&
            i > 0 &&
            dp[i - 1][j]);
      } else {
        dp[i][j] =
          i > 0 &&
          (s[i - 1] === p[j - 1] || p[j - 1] === ".") &&
          dp[i - 1][j - 1];
      }
    }
  }
  return !!dp[s.length][p.length];
}

function s3(s, p) {
  const dp = Array.from({ length: s.length + 1 }, () => []);
  dp[s.length][p.length] = true;
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const match = i < s.length && (p[j] === s[i] || p[j] === ".");
      if (j + 1 < p.length && p[j + 1] === "*") {
        dp[i][j] =
          dp[i][j + 2] || (match && (dp[i + 1][j] || dp[i + 1][j + 2]));
      } else {
        dp[i][j] = match && dp[i + 1][j + 1];
      }
    }
  }
  return !!dp[0][0];
}

/**
 * dynamic program
 */
function solution2(s, p) {
  const dp = Array.from(
    {
      length: s.length + 1,
    },
    (_, i) =>
      Array.from({ length: p.length + 1 }, (_, j) =>
        i === s.length && j === p.length ? true : false
      )
  );

  // dp(x,y) 表示 字符串s.slice(x)和p.slice(y)是否匹配
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const match = i < s.length && (s[i] === p[j] || p[j] === ".");
      if (j + 1 < p.length && p[j + 1] === "*") {
        // j+1 === '*' 首先查看dp[i][j+2]也就是 s.slice(x)和p.slice(j+2)是否匹配
        // i === s.length 时 s[i] = '' 空字符串 空字符串与多个或零个'x*'结尾能match，此时s[i]='',p[j+2]='',所以dp[i][j+2] = true
        dp[i][j] = dp[i][j + 2] || (match && dp[i + 1][j]);
      } else {
        dp[i][j] = match && dp[i + 1][j + 1];
      }
    }
    console.log(i, dp);
  }
  return dp[0][0];
}

/**
 * recursing
 */
function solution1(s, p) {
  function match(i, j) {
    if (j >= p.length) {
      return i >= s.length;
    }
    const c = s[i],
      r = p[j];
    // i < s.length 很关键，如果匹配是 'abcd' '.*'
    // 最后会进入 `''` `.*`的情况,这时候会进入match(I,J+2)跳过
    const matchChar = i < s.length && (c === r || r === ".");
    if (p[j + 1] && p[j + 1] === "*") {
      // match(i,j+2)优先考虑不使用X*的情况，尽可能的跳过pattern
      return match(i, j + 2) || (matchChar && match(i + 1, j));
    } else {
      return matchChar && match(i + 1, j + 1);
    }
  }
  return match(0, 0);
}
// @lc code=end
console.log(isMatch("a", "ab*"));
