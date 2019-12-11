#!/usr/bin/env node

let test = "this *should* be *an* h1";

function getRegexGroups(text) {
  var regex = /[*][a-zA-Z]+[*]/g;
  var matches = text.matchAll(regex);
  for (const match of matches) {
    var n = match[0];
    var textOnly = n.slice(1, n.length - 1);
    console.log(`<em>${textOnly}</em>`);
  }
}

getRegexGroups(test);
// let starIndex = [];
// let flag = 0;
// for (let i = 0; i < test.length; i++) {
//   if (test[i] === "*") {
//     flag += 1;
//     starIndex.push(i);
//     if (flag === 2) {
//       var temp = replaceAt(test, starIndex[0], "<em>");
//       starIndex[1] += 3;
//       var final = replaceAt(temp, starIndex[1], "</em>");
//       starIndex = [];
//       flag = 0;
//     }
//   }
// }

// console.log(final);
// function replaceAt(string, index, replace) {
//   return string.substring(0, index) + replace + string.substring(index + 1);
// }
