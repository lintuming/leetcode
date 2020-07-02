/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  const yMax = matrix.length,
    xMax = matrix[0].length;
  let left = 0,
    right = yMax * xMax - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const y = Math.floor(mid / xMax);
    const x = mid % xMax;
    if (matrix[y][x] === target) {
      return true;
    } else if (matrix[y][x] < target) {
      left = mid + 1;
    } else if (matrix[y][x] > target) {
      right = mid - 1;
    }
  }
  return false;
};
// @lc code=end
console.log(searchMatrix([[1, 3, 5, 7]], 3));
console.log(searchMatrix([[1]], 1));
console.log(searchMatrix([[1], [10], [23]], 10));
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    1
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    13
  )
);
