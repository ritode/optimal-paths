const canConstruct = (target, words, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === "") return true;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const remainder = target.slice(word.length);
      if (canConstruct(remainder, words, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
// Time Complexity:
// Space Complexity:

const canConstruct1 = (target, words) => {
  if (target === "") return true;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const remainder = target.slice(word.length);
      if (canConstruct1(remainder, words)) return true;
    }
  }
  return false;
};
// Time Complexity: O(n^m*m)
// Space Complexity: O(m*m)
console.log(canConstruct("abcdef", ["ab", "abc", "def"]));
