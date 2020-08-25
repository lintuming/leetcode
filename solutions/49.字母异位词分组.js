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
var groupAnagrams = function s1(strs) {
  const ans = [];
  function hashfy(str) {
    
  }
  const hashTable = new Map();
  for (let i = 0; i < strs.length; i++) {
    const hash = hashfy(strs[i]);
    if (hashTable.has(hash)) {
      hashTable.get(hash).push(strs[i]);
    } else {
      hashTable.set(hash, [strs[i]]);
    }
  }
  hashTable.forEach((v) => ans.push(v));
  return ans
};

function s2(strs) {
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
}
// @lc code=end
