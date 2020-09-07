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
var fullJustify = function s2(words, maxWidth) {
  const ans = [];
  let i = 0;
  let j = 0;
  while (j < words.length) {
    let begin = j;
    let sum = words[j].length;
    j++;
    while (words[j].length + sum + 1 <= maxWidth) {
      j++;
    }
    
  }
};

function s1(words, maxWidth) {
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
        ws.forEach((w, i) => {
          if (rest > 0 && i !== ws.length - 1) {
            rest--;
            w = w + " ";
          }
          ws[i] = w;
        });
      }
      result.push(ws.join(" "));
    }
  }
  return result;
}
// @lc code=end

function justifyImgs(imgs, maxWidth) {
  const heightBase = imgs.reduce((acc, item) => acc * item[1], 1);
  let sum = 0;
  for (let i = 0; i < imgs.length; i++) {
    const [w, h] = imgs[i];
    const newH = heightBase;
    const newW = (heightBase / h) * w;
    imgs[i] = [newW, newH];
    sum += newW;
  }
  let shrinkLevel = maxWidth / sum;
  shrinkLevel =
    shrinkLevel >= 1 ? Math.floor(shrinkLevel) : shrinkLevel.toFixed(1);
  return imgs.map(([w, h]) => [w * shrinkLevel, h * shrinkLevel]);
}
console.log(
  justifyImgs(
    [
      [1, 1],
      [3, 4],
      [1, 1],
    ],
    10
  )
);
