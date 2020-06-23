/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  if (!nums.length) return result;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    const n1 = nums[i];
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const rest = target - n1;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const n2 = nums[j];
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = n2 + nums[left] + nums[right];
        if (sum === rest) {
          result.push([n1, n2, nums[left], nums[right]]);
          while (left < nums.length && nums[left] === nums[left + 1]) {
            left++;
          }
          while (right > j && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < rest) {
          left++;
        } else if (sum > rest) {
          right--;
        }
      }
    }
  }
  return result
};
// @lc code=end
console.log(fourSum([1, 0, -1, 0, -2, 2],1))