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

const count = Array.from({ length: 26 }, () => 0);
function hashfy(str, index = 0) {
  if (index >= str.length) {
    return count.join("#");
  }
  const i = str.charCodeAt(index) - "a".charCodeAt(0);
  count[i]++;
  const result = hashfy(str, index + 1);
  count[i]--;
  return result;
}
var groupAnagrams = function s1(strs) {
  const ans = [];
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
  return ans;
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
