/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
/**
 * 
 * 有限状态机
 */
const MIN = - (2**31)
const MAX = 2**31 - 1
var myAtoi = function(str) {
  let s = 'start';
  let sign = 1;
  let n = 0;
  const states = {
     /**            ' '     +/-    number  other*/
    'start':/****/['start','sign','number','end'],
    'sign':/*****/['end'  ,'end' ,'number','end'],
    'number':/***/['end'  ,'end' ,'number','end'],
    'end':/******/['end'  ,'end' ,'end'   ,'end']
  }
  function switchState(char){
    if(char === ' '){
      return 0
    }else if (/[\+\-]/.test(char)){
      return 1
    }else if(/[0-9]/.test(char)){
      return 2
    }else {
      return 3
    }
  }
  for( const c of str){
    s = states[s][switchState(c)];
    if(s === 'sign'){
      sign = c === '+'?1:-1;
    }else if(s === 'number'){
      n = n * 10 + Number(c);
    }
  }
  n = sign * n;
  return Math.max(MIN,Math.min(n,MAX))
};
// @lc code=end

