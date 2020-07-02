/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let i = 0;
  while (i < words.length) {
    let start = i;
    let rest = maxWidth;
    let w;
    let space = 0;
    while (i < words.length && (w = words[i]).length + space <= rest) {
      rest -= w.length + space;
      if (space === 0) {
        space = 1;
      }
      i++;
    }
    const ws = words.slice(start, i);
    if (ws.length === 1 || i >= words.length) {
      const w = ws.join(" ");
      result.push(w + " ".repeat(maxWidth - w.length));
    } else {
      while (rest) {
        ws.forEach((w,i) => {
          if (rest > 0&&i!==ws.length-1) {
            rest--;
            w = w + " ";
          }
          ws[i]=w
        });
      }
      result.push(ws.join(" "));
    }
  }
  return result;
};
// @lc code=end
console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);
console.log(
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
);
console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);
