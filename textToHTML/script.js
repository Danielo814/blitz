fetch("/textFile.txt")
  .then(response => response.text())
  .then(data => {
    console.log(data);
  });
