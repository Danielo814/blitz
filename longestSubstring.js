function lengthLongestSubstring(s) {
  let newString = "";
  let subStrings = {};
  for (let i = 0; i < s.length; i++) {
    if (!newString.includes(s[i])) {
      newString += s[i];
    } else {
      subStrings[newString] = newString.length;
      newString = "";
      i = i - 1;
    }
  }
  let longestSubstring = Object.keys(subStrings).reduce(function(a, b) {
    return subStrings[a] > subStrings[b] ? subStrings[a] : subStrings[b];
  });
  return longestSubstring;
}

let output = lengthLongestSubstring("abcabcbb");
console.log(output);
