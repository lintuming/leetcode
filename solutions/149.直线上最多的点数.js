/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 *   任意两点 都能形成一条直线,
 *   利用斜率作为key
 *   斜率公式 m = y1-y2/x1-x2
 */

const s1 = (points) => {
  if (points.length <= 2) return points.length;
  let result = 2,
    n = points.length;
  for (let i = 0; i < n - 1; i++) {
    let hash = { _: 0 },
      dup = 1;
    for (let j = i + 1; j < n; j++) {
      let [[x1, y1], [x2, y2]] = [points[i], points[j]];
      if (x1 === x2 && y1 === y2) {
        dup++;
        continue;
      }
      let k = (x1 - x2) / (y1 - y2);
      if (k === -Infinity) k = Infinity;
      hash[k] = hash[k] ? hash[k] + 1 : 1;
    }
    result = Math.max(result, Math.max(...Object.values(hash)) + dup);
  }
  return result;
};

function gcd(a, b) {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}
function s2(points) {
  if (points.length < 3) return points.length;
  let ans = 0;
  if (points.length === 0) return ans;
  for (let i = 0; i < points.length; i++) {
    const xi = points[i][0];
    const yi = points[i][1];
    let sameX = 1;
    let sameY = 1;
    let max = 0;
    let duplicate = 1;
    const map = new Map();
    for (let j = i + 1; j < points.length; j++) {
      const xj = points[j][0];
      const yj = points[j][1];
      const x = xj - xi;
      const y = yj - yi;
      if (x === 0 && y === 0) {
        duplicate++;
        continue;
      } else if (x === 0) {
        sameX++;
        continue;
      } else if (y === 0) {
        sameY++;
        continue;
      } else {
        const g = gcd(x, y);
        const k = x / g + "/" + y / g;
        map.set(k, (map.has(k) ? map.get(k) : 0) + 1);
        max = Math.max(max, map.get(k));
      }
    }
    ans = Math.max(ans, max + duplicate, sameX, sameY);
  }
  return ans;
}
var maxPoints = s2;

// @lc code=end

// console.log(
//   maxPoints([
//     [1, 1],
//     [3, 2],
//     [5, 3],
//     [4, 1],
//     [2, 3],
//     [1, 4],
//   ])
// );
// console.log(
//   maxPoints([
//     [1, 1],
//     [2, 2],
//     [3, 3],
//   ])
// );

console.log(
  maxPoints([[0,0],[94911150,94911151],[94911151,94911152]])
);
