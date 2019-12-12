var myImage = document.getElementById("imgUrl");
myImage.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", `${myImage.value}`);
    document.body.append(newImage);
  }
});
