/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  if (nums.length === 0) {
    return result;
  }
  // sort at ascending order
  // time complexity O(log n)
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 剪枝 避免result重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let n = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = n + nums[left] + nums[right];
      // match!
      if (sum === 0) {
        result.push([n, nums[left], nums[right]]);
        // 剪枝
        while (left < nums.length && nums[left] === nums[left + 1]) {
          left++;
        }
        while (right > i && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum > 0) {
        // greater than 0,should decrease the largest part;
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
  return result
};
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]))