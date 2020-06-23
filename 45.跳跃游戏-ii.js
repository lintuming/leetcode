/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let current = 0;
  while (current < nums.length - 1) {
    const steps = nums[current];
    // 假设从当前位置跳跃最大长度
    let j = current + steps;

    // greedy 每一次跳跃都尽可能的远
    let maxSteps = nums[j] + j;
    let nextCurrent = j;
    // 从当前位置可以达到的最远位置向后数，计算出能跳的最远的位置
    for (j; j<nums.length-1&&j > current; j--) {
      if (nums[j] + j > maxSteps) {
        maxSteps = nums[j] + j;
        nextCurrent = j;
      }
    }
    current = nextCurrent;
    count++;
  }
  return count;
};
// @lc code=end
// [3, 3, 3, 1, 1, 5, 4, 1, 1, 4];
console.log(jump([2,3,1]));
