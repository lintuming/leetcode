/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
   if(denominator === 0 || numerator === 0){
     return '0'
   }
   const ans = []
   if (numerator < 0 ^ denominator < 0) {
     ans.push('-')
   }
   numerator = Math.abs(numerator);
   denominator = Math.abs(denominator);
   ans.push(Math.floor(numerator / denominator));
   let rest = numerator % denominator;
   if (rest === 0) {
     return ans.join('')
   }
   ans.push('.')
   const redundant = new Map();
   while (rest !== 0 ){
    if (redundant.has(rest)) {
      ans.splice(redundant.get(rest),0,"(");
      ans.push(')')
      break;
    }
    redundant.set(rest,ans.length)
    rest *= 10;
    ans.push( rest / denominator | 0);
    rest = rest % denominator;
   } 
   return ans.join('')
};
// @lc code=end

// console.log(fractionToDecimal(1,2));
// console.log(fractionToDecimal(2,1));
// console.log(fractionToDecimal(2,3));
// console.log(fractionToDecimal(2,0));
// console.log(fractionToDecimal(1,6));
console.log(fractionToDecimal(2147483648,1));
console.log(fractionToDecimal(-2147483648,1));





