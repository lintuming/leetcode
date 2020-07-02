/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = solution2;

function solution2(matrix) {
  const r = [];
  if (matrix.length === 0) return r;
  const m = matrix.length,
    n = matrix[0].length;
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;
  while (top <= bottom && left <= right && r.length < m * n) {
    for (let x = left; x <= right; x++) {
      r.push(matrix[top][x]);
    }
    for (let y = top + 1; y <= bottom; y++) {
      r.push(matrix[y][right]);
    }
    if (left < right && top < bottom) {
      for (let x = right - 1; x >= left; x--) {
        r.push(matrix[bottom][x]);
      }
      for (let y = bottom - 1; y > top; y--) {
        r.push(matrix[y][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return r
}

function solution1(matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  let m = matrix.length;
  let n = matrix[0].length;
  let start = 0;
  let y = start,
    x = start;
  while (
    start <= m &&
    start <= n &&
    result.length < matrix.length * matrix[0].length
  ) {
    for (; x < n; x++) {
      result.push(matrix[y][x]);
    }
    x--;
    y++;
    for (; y < m; y++) {
      result.push(matrix[y][x]);
    }
    y--;
    x--;
    for (; x >= start && y > start; x--) {
      result.push(matrix[y][x]);
    }
    x++;
    y--;
    for (; y > start && x < n - 1; y--) {
      result.push(matrix[y][x]);
    }
    y++;
    x++;
    m--;
    n--;
    start++;
  }
  return result;
}
// @lc code=end
void [
  spiralOrder([[3], [6], [9]]),
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  spiralOrder([
    [1, 2, 3],
    [4, 5, -6],
  ]),
].forEach((r) => console.log(r));
