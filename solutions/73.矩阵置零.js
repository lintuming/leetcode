/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function s2(matrix) {
  if (matrix.length === 0) {
    return matrix;
  }
  outer: for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (skipColumn.has(j) || matrix[i][j] === 1) {
        continue;
      }
      let left = j - 1,
        right = j + 1,
        top = i - 1,
        bottom = i + 1;
      while (left >= 0) {
        matrix[i][left] = 0;
        left--;
      }
      while (right < matrix[0].length) {
        matrix[i][right] = 0;
        right++;
      }
      while (top >= 0) {
        matrix[top][j] = 0;
        top--;
      }
      while (bottom < matrix.length) {
        matrix[bottom][j] = 0;
        bottom++;
      }
      skipColumn.set(j, true);
    }
  }
  return matrix;
};

function s1(matrix) {
  if (matrix.length === 0) return matrix;

  function visit(y, x, mutate) {
    if (y >= matrix.length) {
      return;
    }
    if (x >= matrix[0].length) {
      return visit(y + 1, 0, mutate);
    }
    const num = matrix[y][x];
    if (num === 0 && !mutate) {
      for (let i = 0; i < matrix[0].length; i++) {
        matrix[y][i] = matrix[y][i] === 0 ? 0 : "-";
      }
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][x] = matrix[j][x] === 0 ? 0 : "-";
      }
      return visit(y, x + 1, mutate);
    } else {
      if (mutate && num === "-") {
        matrix[y][x] = 0;
      }
      return visit(y, x + 1, mutate);
    }
  }
  visit(0, 0);
  visit(0, 0, true);
  return matrix;
}
// @lc code=end
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
