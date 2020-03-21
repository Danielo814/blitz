// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let occObj = {};
  for (let character of str) {
    occObj[character] = occObj[character] + 1 || 1;
  }
  return occObj;
}

module.exports = maxChar;
