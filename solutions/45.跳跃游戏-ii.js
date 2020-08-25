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
var jump = function s3(nums) {
  let maxPos = 0;
  let steps = 0;
  let bound = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);
    if (i === bound) {
      bound = maxPos;
      steps++;
    }
  }
  return steps
};

function s2(nums) {
  let jumpCount = 0;
  let currentIndex = 0;
  while (currentIndex < nums.length - 1) {
    let max = currentIndex;
    for (
      let i = currentIndex + 1;
      i < nums.length - 1 && i <= currentIndex + nums[currentIndex];
      i++
    ) {
      const steps = nums[i] + i;
      if (steps > nums[max] + max) {
        jumpCount++;
        max = i;
      }
    }
    jumpCount++;
    currentIndex = nums[max] + max;
  }
  return jumpCount;
}

function s1(nums) {
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
    for (j; j < nums.length - 1 && j > current; j--) {
      if (nums[j] + j > maxSteps) {
        maxSteps = nums[j] + j;
        nextCurrent = j;
      }
    }
    current = nextCurrent;
    count++;
  }
  return count;
}
// @lc code=end
// [3, 3, 3, 1, 1, 5, 4, 1, 1, 4];
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([1, 2]));
console.log(jump([0]));
