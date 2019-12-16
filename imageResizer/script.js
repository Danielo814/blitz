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
  if (document.getElementsByTagName("IMG").length > 0) {
    let imageId = document.getElementById("image");
    imageId.parentNode.removeChild(imageId);
  }
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `${url}`);
  newImage.setAttribute("id", "image");
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
