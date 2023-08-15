const fibDP = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
  return memo[n];
};
// Time Complexity: O(n)
// Space Complexity: O(n)

const fibRecursive = (n) => {
  if (n <= 2) return 1;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

// Time Complexity: O(2^n)
// Space Complexity: O(n)
console.log(fibDP(2));
console.log(fibDP(3));
console.log(fib(30));
