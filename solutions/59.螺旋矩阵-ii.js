/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
/**
 *
 * 一共n2个元素,n*n;
 *
 */
var generateMatrix = function s2(n) {
  if (n === 1) return [[1]];
  const length = n * n;
  let x = 0,
    y = 0,
    xMax = n - 1,
    yMax = n - 1;
  const ans = Array.from({ length: n }, () => []);
  let val = 1;
  while (x <= xMax && y <= yMax) {
    for (let i = x; i <= xMax; i++) {
      ans[y][i] = val++;
    }
    for (let j = y + 1; j <= yMax; j++) {
      ans[j][xMax] = val++;
    }
    if (x < xMax && y < yMax) {
      for (let i = xMax - 1; i >= x; i--) {
        ans[yMax][i] = val++;
      }
      for (let j = yMax - 1; j > y; j--) {
        ans[j][x] = val++;
      }
    }
    x++;
    y++;
    xMax--;
    yMax--;
  }
  return ans;
};

// function s1(n) {
//   if (n === 1) return [[1]];
//   const rect = Array.from({ length: n }, () => []);
//   let top = 0,
//     bottom = n - 1,
//     left = 0,
//     right = n - 1;
//   let i = 1;
//   while (top <= bottom && left <= right && i <= n ** 2) {
//     for (let x = left; x <= right; x++) {
//       rect[top][x] = i++;
//     }
//     for (let y = top + 1; y <= bottom; y++) {
//       rect[y][right] = i++;
//     }
//     if (left < right && top < bottom) {
//       for (let x = right - 1; x >= left; x--) {
//         rect[bottom][x] = i++;
//       }
//       for (let y = bottom - 1; y > top; y--) {
//         rect[y][left] = i++;
//       }
//     }
//     left++;
//     right--;
//     top++;
//     bottom--
//   }
//   return rect
// };
// @lc code=end

console.log(generateMatrix(3));
console.log(generateMatrix(2));
console.log(generateMatrix(4));
