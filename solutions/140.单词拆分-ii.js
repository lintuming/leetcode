/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = s1;

function s2(s, wordDict) {
  if (!s) return [];
  const map = new Map();
  for (const w of wordDict) {
    map.set(w, true);
  }
  const ans = [];
  const buffer = [];
  function backTrack(substr) {
    if (substr === "") {
      return ans.push(buffer.join(" "));
    }
    for (let i = 0; i < substr.length; i++) {
      const sub = substr.slice(0, i + 1);
      if (map.has(sub)) {
        buffer.push(sub);
        backTrack(substr.slice(i + 1));
        buffer.pop();
      }
    }
  }
  backTrack(s);
  return ans;
}

//
function s1(s, wordDict) {
  if (!s) return [];
  const dp = [[0]];
  const map = new Map();
  for (const w of wordDict) {
    map.set(w, true);
  }
  for (let i = 1; i <= s.length; i++) {
    dp[i] = null;
    for (let j = 0; j < i; j++) {
      const sliced = s.slice(j, i);

      if (dp[j] && map.has(sliced)) {
        if (!dp[i]) {
          dp[i] = [];
        }
        dp[i].push(j);
      }
    }
  }
  if (!dp[s.length]) return [];
  const ans = [];
  function build(index, prev) {
    if (index === 0) {
      ans.push(prev);
      return;
    }
    const d = dp[index];
    for (let i = 0; i < d.length; i++) {
      const start = d[i];
      build(
        start,
        prev === null
          ? s.slice(start, index)
          : s.slice(start, index) + " " + prev
      );
    }
  }
  build(s.length,null);
  return ans
}
// @lc code=end
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);
// console.log(wordBreak("pineapplepenapple", []));
// console.log(
//   wordBreak(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     [
//       "a",
//       "aa",
//       "aaa",
//       "aaaa",
//       "aaaaa",
//       "aaaaaa",
//       "aaaaaaa",
//       "aaaaaaaa",
//       "aaaaaaaaa",
//       "aaaaaaaaaa",
//     ]
//   )
// );
