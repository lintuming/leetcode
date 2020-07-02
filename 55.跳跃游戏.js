/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = solution2

function solution2(nums){

  let rightMost = 0
  for(let i = 0;i<nums.length;i++){
    if(i<=rightMost){
      rightMost = Math.max(rightMost,i + nums[i]);
      if(rightMost>=nums.length - 1 ) return true
    }
  }
  return false
}
function solution1(nums) {
  if (nums.length === 1) return true;
  for (let i = 0; i <= nums.length - 2; i++) {
    const steps = nums[i];
    let maxSteps = 0;
    let nextIdx = i;
    for (let j = i + 1; j <= i + steps && j < nums.length; j++) {
      if (j + nums[j] > maxSteps) {
        maxSteps = j + nums[j]
        nextIdx = j;
      }
    }
    if(nextIdx >= nums.length - 1) return true;
    if(nextIdx === i ) return false;
    i = nextIdx - 1;
  }
  return false;
};
// @lc code=end
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
