/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = s2;

function s2(gas, cost) {
  const total = [gas[0]];
  const totalCost = [cost[0]];
  const l = gas.length;
  for (let i = 1; i < l; i++) {
    total[i] = total[i - 1] + gas[i];
    totalCost[i] = totalCost[i - 1] + cost[i];
  }
  if (totalCost[l - 1] > total[l - 1]) {
    return -1;
  }
  let start = 0;
  for (let i = 0; i < l; i++) {
    console.log(start,i)
    const restGas = total[i] - (total[start - 1] || 0);
    const costs = totalCost[i] - (totalCost[start - 1] || 0);
    if (costs > restGas) {
      start = i+1;
    }
  }
  return start
}
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

console.log(canCompleteCircuit(
    [1, 2, 3, 4, 5], 
    [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
function s1(gas, cost) {
  const total = [gas[0]];
  const totalCost = [cost[0]];
  const l = gas.length;
  for (let i = 1; i < l; i++) {
    total[i] = total[i - 1] + gas[i];
    totalCost[i] = totalCost[i - 1] + cost[i];
  }
  if (totalCost[l - 1] > total[l - 1]) {
    return -1;
  }

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      let j = (i + 1) % l;
      let sum = gas[i];
      let sumCost = cost[i];
      while (sum >= sumCost && j !== i) {
        sum += gas[j];
        sumCost += cost[j];
        j = (j + 1) % l;
      }
      if (j === i) {
        return i;
      }
    }
  }
}
// @lc code=end


