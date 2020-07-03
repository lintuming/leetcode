/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (ratings.length === 0) return 0;
  const candys = ratings.map(() => 1);
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i + 1] < ratings[i]) {
      continue;
    }
    let j = i - 1;
    while (
      ratings[j] > ratings[j + 1] &&
      candys[j] <= candys[j + 1] &&
      j >= 0
    ) {
      // 如果 J 是两个低谷的峰顶，取最大值
      // 例如
      /**       5
       *            4
       *               3 
       *    2            2
       * 1                   1 
       */
      candys[j] = Math.max(candys[j], 1 + i - j);
      j--;
    }
    j = i + 1;
    while (
      ratings[j] > ratings[j - 1] &&
      candys[j] <= candys[j - 1] &&
      j < ratings.length
    ) {
      candys[j] = Math.max(candys[j], 1 + j - i);
      j++;
    }
    i = j - 1;
  }
  return candys.reduce((a, b) => a + b);
};
// @lc code=end

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([1, 3, 2, 2, 1]));
console.log(candy([1, 6, 10, 8, 7, 3, 2]));

//     3
//         2   2
// 1               1
// 2  1  0  1  0 2

//  2                    2     2
//      1      1   1
//         0          0

// 1     2
//    0
