fetch("/textFile.txt")
  .then(response => response.text())
  .then(data => {
    console.log(data);
    let body = document.getElementById("body");
    body.innerHTML = data;
  });
