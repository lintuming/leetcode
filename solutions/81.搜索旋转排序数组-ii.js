/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */


var search = function s2(nums,target){


}







 /**
  * 由于存在重复项，需要去重 O(n);
  * O(n) + O(logM),
  * 过犹不及
  */
function s1(nums, target) {

  const hashMap = {};
  let j = 0,
    i = 0;
  for (; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      //重复
    } else {
      hashMap[nums[i]] = true;
      nums[j] = nums[i];
      j++;
    }
  }
  let left = 0,
  right = j - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return true;
    } else if (nums[left] <= nums[mid]) {
      // [left,mid];
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[right] >= nums[mid]) {
      // [mid,right]
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
// @lc code=end
console.log(search([2,5,6,0,0,1,2],3))