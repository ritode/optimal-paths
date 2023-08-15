const gridTravellerDP = (m, n, memo = {}) => {
  const key = m + "-" + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTravellerDP(m - 1, n, memo) + gridTravellerDP(m, n - 1, memo);
  return memo[key];
};
// Time Complexity: O(2^(n+m))
// Space Complexity: O(n+m)

const gridTravellerRec = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTravellerRec(m - 1, n) + gridTravellerRec(m, n - 1);
};
// Time Complexity: O(n*m)
// Space Complexity: O(n+m)

console.log(gridTravellerDP(1, 1));
console.log(gridTravellerDP(1, 6));
console.log(gridTravellerDP(18, 18));
