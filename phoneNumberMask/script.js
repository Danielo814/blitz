// function test() {
//   let test = document.getElementById("input");
//   test.value[0] = "(";
//   console.log(test.value);
// }

let test = document.getElementById("input");

test.addEventListener(
  "keyup",
  function(evt) {
    var n = parseInt(this.value.replace(/\D/g, ""), 10);
    test.value = n.toLocaleString();
  },
  false
);
