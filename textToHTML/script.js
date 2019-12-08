fetch("/textFile.txt")
  .then(response => response.text())
  .then(data => {
    let body = document.getElementById("body");
    var dataArr = data.split("\n");
    console.log(dataArr[0][0]);
    for (let i = 0; i < dataArr.length; i++) {
      console.log(dataArr[i].slice(1, dataArr[i].length));
      if (dataArr[i][0] === "#" && dataArr[i][1] !== "#") {
        body.innerHTML +=
          "<h1>" + dataArr[i].slice(1, dataArr[i].length) + "</h1>";
      } else if (dataArr[i].slice(0, 2) === "##" && dataArr[i][2] !== "#") {
        body.innerHTML +=
          "<h2>" + dataArr[i].slice(2, dataArr[i].length) + "</h2>";
      } else if (dataArr[i].slice(0, 3) === "###") {
        body.innerHTML +=
          "<h3>" + dataArr[i].slice(3, dataArr[i].length) + "</h3>";
      } else {
        body.innerHTML += "<p>" + dataArr[i] + "</p>";
      }
    }
  });
