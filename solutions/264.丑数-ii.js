/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const buffer = [1];
  const base = [2, 3, 5];
  const indexes = [0,0,0]
  while (!buffer[n-1]) {
    const [c2,c3,c5] = base.map((b,i)=>b * buffer[indexes[i]] ) 
    const min = Math.min(c2,c3,c5);
    buffer.push(Math.min(c2,c3,c5));
    if (min === c2) {
      indexes[0]++
    }
    if (min === c3) {
      indexes[1]++
    }
    if (min === c5) {
      indexes[2]++
    }
  }
  return buffer[n-1]
};
// @lc code=end

console.log(nthUglyNumber(10))