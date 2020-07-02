/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  let i = 1;
  const row = [1];
  while (i <= rowIndex) {
    let l = row.length;
    if (i % 2 === 0) {
      row.push(row[l - 1] * 2);
    }
    for (let j = l - 1; j >= 0; j--) {
      row[j] = row[j] + (row[j - 1] || 0);
    }
    i++
  }
  return rowIndex%2===0?row.concat(row.slice(0,row.length-1).reverse()):row.concat(row.slice().reverse())
};
// @lc code=end

//   1 5 10 10 5 1
// 1  6 15 20 15 6 1
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))
console.log(getRow(6))

