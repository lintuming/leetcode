/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closestSum = 0;
  let closestAbs = Number.MAX_SAFE_INTEGER;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let n = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = n + nums[left] + nums[right];
      const offsetAbs = Math.abs(target - sum);
      if (closestAbs > offsetAbs) {
        closestAbs = offsetAbs;
        closestSum = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }
    }
  }
  return closestSum
};
// @lc code=end
console.log(threeSumClosest([-1,2,1,-4],1))