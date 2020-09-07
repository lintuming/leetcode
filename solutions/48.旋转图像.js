/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/**
 * 
[
  [ 5, 1, 9,11, 1],
  [ 2, 4, 8,10, 2],
  [13, 3, 6, 7, 3],
  [15,14,12,16, 4],
  [8 , 6, 5, 4, 5]

]

[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
 */
var rotate = function s2(matrix) {
  let indexStart = 0,
    indexEnd = matrix.length - 1;
  while (indexStart < indexEnd) {
    for (let i = indexStart; i < indexEnd; i++) {
      const temp = matrix[i][indexStart];
      matrix[i][indexStart] = matrix[indexEnd][i];
      matrix[indexEnd][i] = matrix[indexEnd - i + indexStart][indexEnd];
      matrix[indexEnd - i + indexStart][indexEnd] =
        matrix[indexStart][indexEnd - i + indexStart];
      matrix[indexStart][indexEnd - i + indexStart] = temp;
    }
    indexStart++;
    indexEnd--;
  }
  return matrix
};

// function solution1(matrix) {
//   let start = 0,
//     end = matrix.length - 1;
//   while (start < end) {
//     for (let i = start; i < end; i++) {
//       let temp = matrix[i][start];
//       matrix[i][start] = matrix[end][i];
//       matrix[end][i] = matrix[end - i + start][end];
//       matrix[end - i + start][end] = matrix[start][end - i + start];
//       matrix[start][end - i + start] = temp;
//     }
//     start++;
//     end--;
//   }
//   return matrix;
// }
// @lc code=end
console.log(
  rotate([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
