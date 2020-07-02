/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */

//see https://excalidraw.com/#json=5089071357493248,Lay1QrhS3ylEVSkKV9M5TQ
var grayCode = s1;



function s1(n) {
  if (n === 0) return [0];
  const result = [];
  const buffer = [];
  function backTrack(n, reverse = false) {
    if (n === 0) {
      return result.push(parseInt(buffer.join(""), 2));
    }
    if (!reverse) {
      buffer.push("0");
      backTrack(n - 1, false);
      buffer.pop();
      buffer.push("1");
      backTrack(n - 1, true);
      buffer.pop();
    } else {
      buffer.push("1");
      backTrack(n - 1, false);
      buffer.pop();
      buffer.push("0");
      backTrack(n - 1, true);
      buffer.pop();
    }
  }
  backTrack(n, false);
  return result;
}
// @lc code=end
console.log(grayCode(3));
