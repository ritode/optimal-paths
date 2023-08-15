//DP
const canSum = (target, numbers, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    const rem = target - num;
    memo[target] = canSum(rem, numbers, memo);
    if (memo[target]) return true;
  }
  return false;
};

// Time Complexity:
// Space Complexity:

//Recursive
const canSum1 = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of numbers) {
    const rem = target - num;
    if (canSum1(rem, numbers) === true) return true;
  }
  return false;
};
// Time Complexity:
// Space Complexity:

console.log(canSum(7, [3, 1, 9]));
