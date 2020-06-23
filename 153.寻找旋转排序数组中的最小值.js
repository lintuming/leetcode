/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if(nums.length===1)return nums[0]
  for(let i = 1;i<nums.length;i++){
    if(nums[i]<nums[i-1]){
      return nums[i]
    }
  }
  return nums[0]
};
// @lc code=end

console.log(findMin([3,4,5,1,2]))
