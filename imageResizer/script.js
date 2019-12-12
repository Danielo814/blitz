var myImage = document.getElementById("imgUrl");
myImage.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    createImage(myImage.value);
  }
});

function createImage(url) {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `${url}`);
  document.body.append(newImage);
}
