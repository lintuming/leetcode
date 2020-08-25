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
var convert = function s2(s, numRows) {
  if (numRows === 1) return s;
  const buffer = Array.from({ length: numRows }, () => []);
  let sign = -1;
  let char;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    buffer[j].push(char);
    if (j === 0 || (j + 1) % numRows === 0) {
      sign = -1 * sign;
    }
    j += sign;
  }
  return buffer.reduce((acc, item) => acc + item.join(""), "");
};

function s1(s, numRows) {
  if (numRows === 1) return s;
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
}
// @lc code=end
console.log(convert("LEETCODEISHIRING", 4));
