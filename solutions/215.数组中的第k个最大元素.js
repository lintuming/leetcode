/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  function quickSort(nums, left, right, nthIdx) {
    const p = pivot(nums, left, right);
    if (nthIdx === p) {
      return nums[p];
    } else if (nthIdx > p) {
      return quickSort(nums, p + 1, right, nthIdx);
    } else if (nthIdx < p) {
      return quickSort(nums, left, p, nthIdx);
    }
  }
  return quickSort(nums, 0, nums.length, k - 1);
  function pivot(nums, left, right) {
    let base = nums[left];
    let i = left + 1;
    for (let j = i; j < right; j++) {
      if (nums[j] > base) {
        swap(nums, j, i);
        i++;
      }
    }
    swap(nums,left, i - 1);
    return i - 1;
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};
// @lc code=end
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
