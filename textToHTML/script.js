fetch("/textFile.txt")
  .then(response => response.text())
  .then(data => {
    let body = document.getElementById("body");
    var dataArr = data.split("\n");
    for (let i = 0; i < dataArr.length; i++) {
        body.innerHTML += testfunc(dataArr[i]);
    }
  });

[
  "# this should be an h1",
  "## this should be an h2",
  "### this should be an h3",
  ""
];

function testfunc(data) {
  if (data[0] === "#" && data[1] !== "#") {
    return "<h1>" + data.slice(1, data.length) + "</h1>";
  } else if (data.slice(0, 2) === "##" && data[2] !== "#") {
    return "<h2>" + data.slice(2, data.length) + "</h2>";
  } else if (data.slice(0, 3) === "###") {
    return "<h3>" + data.slice(3, data.length) + "</h3>";
  } else {
    return "<p>" + data + "</p>";
  }
}
