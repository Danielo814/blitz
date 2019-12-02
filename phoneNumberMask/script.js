let phoneNum = document.getElementById("input");

phoneNum.addEventListener(
  "keyup",
  function(evt) {
    let numArr = this.value.split("");
    console.log(numArr);
    if (this.value.length == 4) {
      numArr.splice(0, 0, "(");
      numArr.splice(4, 0, ")");
      this.value = numArr.join("");
    } else if (this.value.length == 8) {
      numArr.splice(8, 0, "-");
      this.value = numArr.join("");
    }
  },
  false
);
