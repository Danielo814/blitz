document.body.addEventListener("keyup", function(event) {
  addKey(event.key);
});

function addKey(keyEvent) {
  console.log(keyEvent);
  let div = document.createElement("DIV");
  div.setAttribute("class", "button-container");
}
