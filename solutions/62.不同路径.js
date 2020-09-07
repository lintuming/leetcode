/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function s2(m, n) {
  const dp = Array.from({ length: n }, (_, i) =>
    i === 0 ? Array(m).fill(1) : [1]
  );

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[n-1][m-1]
};
// 递归超市,使用dp,O(m*n)
// function solution1(m, n) {
//   const dp = Array.from(
//     {
//       length: n,
//     },
//     () => []
//   );

//   for (let y = n - 1; y >= 0; y--) {
//     for (let x = m - 1; x >= 0; x--) {
//       if (y === n - 1 && x === m - 1) {
//         dp[y][x] = 1;
//       } else {
//         dp[y][x] =
//           (dp[y + 1] ? dp[y + 1][x] || 0 : 0) +
//           (dp[y][x + 1] ? dp[y][x + 1] || 0 : 0);
//       }
//     }
//   }
//   return dp[0][0];
// }

// // time out
// function solution(m, n) {
//   function backTrack(x, y) {
//     if (x === m && y === n) {
//       return 1;
//     }
//     return (
//       (x + 1 <= m ? backTrack(x + 1, y) : 0) +
//       (y + 1 <= n ? backTrack(x, y + 1) : 0)
//     );
//   }
//   return backTrack(1, 1);
// }
// @lc code=end
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7,3));

