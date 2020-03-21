// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let occObj = {};
  let max = 0;
  let maxChar = "";
  for (let character of str) {
    occObj[character] = occObj[character] + 1 || 1;
  }

  for (let char in occObj) {
    if (occObj[char] > max) {
      max = occObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
