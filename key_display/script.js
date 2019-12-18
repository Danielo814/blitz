document.body.addEventListener("keyup", function(event) {
  mainFunc(event.key);
});

function mainFunc(keyEvent) {
  divContainer = document.getElementById("keyDisplayContainer");
  let testArr = [];
  testArr.push(keyEvent);
  console.log(testArr);
  testArr = [];
  clearExistingKey(divContainer);
  let div = createKey();
  div.innerHTML = keyEvent;
  divContainer.appendChild(div);
}

function clearExistingKey(divContainer) {
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}

function createKey() {
  let div = document.createElement("div");
  div.setAttribute("class", "button-container");
  return div;
}

function checkForMultipleKeys() {}
