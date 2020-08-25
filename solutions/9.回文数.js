/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// two points
var isPalindrome = function s2(x){
  if(x<0)return false;
  x = x + '';
  let left = 0,right = x.length - 1;
  while(left<=right){
    if(x[left]!==x[right]){
      return false
    }
    left++;
    right--;
  }
  return true
}





function s1(x) {
  if (x < 0) return false;
  x = x + "";
  let left = 0,
    right = x.length-1;
  while(left<=right){
    if(x[left] === x[right]){
       left++;
       right--
    }else{
      return false
    }
  }
  return true
};
// @lc code=end
