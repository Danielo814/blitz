document.body.addEventListener("keyup", function(event) {
  addKey(event.key);
});

function addKey(keyEvent) {
  divContainer = document.getElementById("keyDisplayContainer");
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
  let div = document.createElement("DIV");
  div.setAttribute("class", "button-container");
  div.innerHTML = keyEvent;
  divContainer.appendChild(div);
}
