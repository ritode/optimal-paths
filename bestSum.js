const bestSum = (target, nums, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let shortestComb = null;
  for (let num of nums) {
    const remainder = target - num;
    const remainderComb = bestSum(remainder, nums, memo);
    if (remainderComb != null) {
      const combination = [...remainderComb, num];
      if (shortestComb === null || shortestComb.length > combination.length) {
        shortestComb = combination;
      }
    }
  }
  memo[target] = shortestComb;
  return memo[target];
};
// Time Complexity: O(n*m*m)
// Space Complexity: O(m^2)

const bestSum1 = (target, nums) => {
  if (target === 0) return [];
  if (target < 0) return null;
  let shortestComb = null;
  for (let num of nums) {
    const remainder = target - num;
    const remainderComb = bestSum1(remainder, nums);
    if (remainderComb != null) {
      const combination = [...remainderComb, num];
      if (shortestComb === null || shortestComb.length > combination.length) {
        shortestComb = combination;
      }
    }
  }
  return shortestComb;
};
// Time Complexity: O(n^m *m)
// Space Complexity: O(m^2)

console.log(bestSum(7, [3, 1, 9, 6]));
