/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const map = new Map(); // index 到 cloned的隐射;
  function clone(node) {
    if (!node) return node;
    if (map.has(node.val)) {
      return map.get(node.val);
    }
    const n = new Node(node.val);
    map.set(n.val, n);
    n.neighbors = node.neighbors
      ? node.neighbors.map((neighbor) => clone(neighbor))
      : node.neighbors;
    return n;
  }
  return clone(node);
};
// @lc code=end
