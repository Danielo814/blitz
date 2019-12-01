#!/usr/bin/env node

function reverseString(string) {
  reversedString = "";
  for (let end = string.length - 1; end >= 0; end--) {
    reversedString += string[end];
  }
  return reversedString;
}

console.log(reverseString("eat"));
