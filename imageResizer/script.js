var imageProperties = document.querySelectorAll(".imageProperties");
var myImageUrl = document.getElementById("imgUrl");
imageProperties.forEach(item => {
  item.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
      createImage(myImageUrl.value);
    }
  });
});

function createImage(url) {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `${url}`);
  assignDimensions(newImage);
  document.body.append(newImage);
}

function assignDimensions(image) {
  let width = document.getElementById("width");
  let height = document.getElementById("height");
  image.setAttribute(
    "style",
    `width: ${width.value}px; height: ${height.value}px`
  );
}
