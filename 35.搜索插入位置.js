/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0,right = nums.length - 1; //[left,right]
  while(left <= right){ // left > right
    const mid = ((left+right)/2)|0;
    if(nums[mid] === target){
      return mid
    }else if(nums[mid] > target){
      right = mid - 1;
    }else if(nums[mid] < target){
      left = mid + 1
    }
  }
  return left
};
// @lc code=end

console.log(searchInsert([1,3,5,6],5))