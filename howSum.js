const howSum = (target, nums, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of nums) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, nums);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
};

// Time Complexity: O(n * m * m)
// Space Complexity: O(m*m)

const howSum1 = (target, nums) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of nums) {
    const remainder = target - num;
    const remainderResult = howSum1(remainder, nums);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }
  return null;
};

// Time Complexity: O(n^m * m)
// Space Complexity: O(m)

console.log(howSum(7, [3, 1, 9]));
