/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = {};
  function hash(str) {
    return str.split("").sort().join("");
  }
  for (let i = 0; i < strs.length; i++) {
    const h = hash(strs[i]);
    (hashMap[h] || (hashMap[h] = [])).push(strs[i]);
  }
  return Object.keys(hashMap).reduce((acc, key) => {
    acc.push(hashMap[key]);
    return acc;
  }, []);
};
// @lc code=end
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))