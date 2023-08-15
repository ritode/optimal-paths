const allConstruct = (target, words, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === "") return [[]];
  const result = [];
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const rem = target.slice(word.length);
      const remWays = allConstruct(rem, words, memo);
      const targetWays = remWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return memo[target];
};
// Time Complexity: O(n^m)
// Space Complexity: O(m)
// Can't get better than exponential, must go over all possibilities
console.log(...allConstruct("abcdef", ["ab", "abc", "def"]));
console.log(...allConstruct("purple", ["purp", "p", "purpl", "ur", "le"]));
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "eeee",
    "eeee",
    "e",
    "eee",
    "eeeeeeeee",
  ])
);
