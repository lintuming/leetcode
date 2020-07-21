/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = twoPoint



function twoPoint(numbers,target){
  let left = 0,right = numbers.length - 1
  while(left < right){
    const sum = numbers[left] + numbers[right];
    if(sum === target){
      return [left + 1,right + 1]
    }else if( sum > target){
      right --
    }else if(sum < target){
      left ++
    }
  }
  return []
}

function linear(numbers, target) {
   if(numbers.length < 2){
     return []
   }
   const hashMap = new Map();
   let num 
   for(let i = 0; i < numbers.length; i++){
     num = numbers[i]
     if(hashMap.has(target - num)){
       return [hashMap.get(target - num),i + 1]
     }
     hashMap.set(num, i + 1);
   }
   return []
};
// @lc code=end

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,7,11,15],18));
