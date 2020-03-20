// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = n.toString().split("");
  if (n < 0) {
    reversed.shift();
  }
  reversed = parseInt(reversed.reverse().join(""), 10);
  return n < 0 ? reversed * -1 : reversed;
}

module.exports = reverseInt;
