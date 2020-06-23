/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(numRows === 1) return s;
  const columns = Array.from({ length: numRows }, () => []);
  let forward = false;
  let columnIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const column = columns[columnIndex];
    if (columnIndex === 0 || columnIndex === numRows - 1) {
      forward = !forward;
    }
    columnIndex += forward ? 1 : -1;
    column.push(s[i]);
  }
  return columns.reduce((acc, column) => acc + column.join(""), "");
};
// @lc code=end
