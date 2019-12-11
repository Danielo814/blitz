function init() {
  fetch("/textFile.txt")
    .then(response => response.text())
    .then(data => {
      let body = document.getElementById("body");
      let dataArr = data.split("\n");
      parseData(dataArr);
    });
}

function appendElement(text) {
  var body = document.querySelector("body");
  var content = determineElement(text);
  body.append(content);
}

function determineElement(text) {
  var splitText = text.split(" ");
  var isHeading = splitText[0].includes("#");
  // samson is a *puppy* ->  samson is a <strong>puppy</strong>
  if (isHeading) {
    return getHeadingElement(splitText);
  }
  return getDivElement(splitText.join(" "));
  // return splitText.join(" ");
}

function parseData(lines) {
  lines.forEach(line => appendElement(line));
}

function getDivElement(content) {
  let el = document.createElement("div");
  el.append(content);
  return el;
}

function getHeadingElement(content) {
  // determines which h1-h6 this is
  var headingKind = content[0].length;
  // create the element
  var heading = document.createElement(`h${headingKind}`);
  // remove first element
  content.shift();
  // create data string from array
  var text = content.join(" ");
  // put data string inside of the element
  heading.innerText = text;
  return heading;
}

// function createHeading(data) {
//   checkForEmphasis(data);
//   if (data[0] === "#") {
//     if (data.slice(0, 3) === "###") {
//       return "<h2>" + data.slice(3, data.length) + "</h2>";
//     } else if (data.slice(0, 2) === "##") {
//       return "<h3>" + data.slice(2, data.length) + "</h3>";
//     } else {
//       return "<h1>" + data.slice(1, data.length) + "</h1>";
//     }
//   }
//   //   } else if (data.slice(0, 2) === "##" && data[2] !== "#") {
//   //     return "<h2>" + data.slice(2, data.length) + "</h2>";
//   //   } else if (data.slice(0, 3) === "###") {
//   //     return "<h3>" + data.slice(3, data.length) + "</h3>";
//   //   } else {
//   //     return "<p>" + data + "</p>";
//   //   }
// }

// function checkForEmphasis(data) {
//   for (let i = 0; i < data.length; i++) {}
// }

init();
