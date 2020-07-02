/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0,
     j = 0;
    for(;j<nums.length;j++){

        while(j<nums.length&&nums[j]===nums[j+1]&&nums[j]===nums[j+2]){
            j++
        }
        nums[i] = nums[j];
        i++
    }
    return i
};
// @lc code=end

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3],));

