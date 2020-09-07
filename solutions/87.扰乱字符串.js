/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function solution2(s1, s2) {
  const dp = Array.from({ length: s1.length }, () =>
    Array.from({ length: s2.length }, () => [])
  ); // dp[i][j][len] 表示 s1.slice(i,i+len) 能否由 s2.slice(j,j + len)变换过来;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      for (let _len = 1; _len <= s1.length - i; _len++) {
        const len = _len - 1
        if (_len === 1) {
          dp[i][j][len] = s1[i] === s2[j];
        } else {
          
          for (let m = 1; m < len; m++) {
            if (dp[i][j][m] && dp[i + m][j + m][len - m]) {
              dp[i][j][len] = true;
              break;
            }
            // eat   i = 2 j = 2 len = 3; m = 2;
            // tae
            if (dp[i][j + len - m][m] && dp[i + m][j][len - m]) {
              dp[i][j][len] = true;
              break;
            }
          }
        }
      }
    }
  }
};

// // bad performences
// function solution1(s1, s2) {
//   const buffer = {};
//   function recurse(s1, s2) {
//     if (s1.length !== s2.length) {
//       return false;
//     }
//     const key = s1 + ":" + s2;
//     if (buffer[key] != null) return buffer[key];
//     if (s1 === s2) {
//       buffer[key] = true;
//       return buffer[key];
//     }
//     if (s1.length === 1) {
//       buffer[key] = s1 === s2;
//       return buffer[key];
//     }
//     for (let i = 0; i < s1.length - 1; i++) {
//       if (
//         (recurse(s1.slice(0, i + 1), s2.slice(0, i + 1)) &&
//           recurse(s1.slice(i + 1), s2.slice(i + 1))) ||
//         (recurse(s1.slice(0, i + 1), s2.slice(-i - 1)) &&
//           recurse(s1.slice(i + 1), s2.slice(0, -i - 1)))
//       ) {
//         buffer[key] = true;
//         return buffer[key];
//       }
//     }
//     buffer[key] = false;
//     return false;
//   }
//   return recurse(s1, s2);
// }
// @lc code=end
// great eatrg
console.log(isScramble("great", "rgtae"));
console.log(isScramble("abcde", "caebd"));
