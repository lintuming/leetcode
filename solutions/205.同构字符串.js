/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

  function is(s,t){
    const hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
      const key = s[i];
      const val = t[i];
      if (hashMap.has(key) && hashMap.get(key) !== val) {
        return false;
      }
      hashMap.set(key, val);
    }
    return true
  }
 
  return !!is(s,t)&&is(t,s);
};
// @lc code=end

console.log(isIsomorphic("ab", "ca"));
