var myImageUrl = document.getElementById("imgUrl");
myImageUrl.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    createImage(myImageUrl.value);
  }
});

function createImage(url) {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `${url}`);
  //   assignWidth(newImage);
  //   assignHeight(newImage);
  document.body.append(newImage);
}

function assignWidth(image) {
  let width = document.getElementById("width");
  image.setAttribute("style", `width: ${width.value}px`);
}

function assignHeight(image) {
  let height = document.getElementById("height");
  image.setAttribute("style", `height: ${height.value}px`);
}
