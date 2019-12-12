function imgFunc() {
  let myImage = document.getElementById("imgUrl").value;
  let newImage = document.createElement("img");
  newImage.setAttribute("src", `${myImage}`);
  document.body.append(newImage);
  console.log(newImage);

  console.log(typeof myImage);
}
