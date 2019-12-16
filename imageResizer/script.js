var imageProperties = document.querySelectorAll(".imageProperties");
var myImageUrl = document.getElementById("imgUrl");
imageProperties.forEach(item => {
  item.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
      entryPoint(myImageUrl.value);
    }
  });
});

function entryPoint(url) {
  let numImages = document.getElementsByTagName("IMG").length;
  if (checkImageExists(numImages)) {
    let imageId = document.getElementById("image");
    removeImage(imageId);
  }
  let newImage = createImage(url);
  assignDimensions(newImage);
  document.body.append(newImage);
}

function createImage(url) {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `${url}`);
  newImage.setAttribute("id", "image");
  return newImage;
}

function assignDimensions(image) {
  let width = document.getElementById("width");
  let height = document.getElementById("height");
  image.setAttribute(
    "style",
    `width: ${width.value}px; height: ${height.value}px`
  );
}

function checkImageExists(numImages) {
  if (numImages > 0) return true;
  return false;
}

function removeImage(imageId) {
  return imageId.parentNode.removeChild(imageId);
}
