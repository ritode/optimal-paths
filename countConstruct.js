const countConstruct = (target, words, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const rem = target.slice(word.length);
      const numWaysForRest = countConstruct(rem, words, memo);
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return memo[target];
};
// Time Complexity: O(n*m*m)
// Space Complexity: O(m*m)

const countConstruct1 = (target, words) => {
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const rem = target.slice(word.length);
      const numWaysForRest = countConstruct1(rem, words);
      totalCount += numWaysForRest;
    }
  }
  return totalCount;
};
// Time Complexity: O(n^m*m)
// Space Complexity: O(m*m)
console.log(countConstruct("abcdef", ["ab", "abc", "def"]));
console.log(countConstruct("purple", ["purp", "p", "purpl", "ur", "le"]));
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "eeee",
    "eeee",
    "e",
    "eee",
    "eeeeeeeee",
  ])
);
