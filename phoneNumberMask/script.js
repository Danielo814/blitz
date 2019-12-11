let phoneNum = document.getElementById("input");

phoneNum.addEventListener(
  "keyup",
  function(evt) {
    let numArr = this.value.split("");
    console.log(numArr);
    if (this.value.length == 4 && evt.key !== "Backspace") {
      numArr.splice(0, 0, "(");
      numArr.splice(4, 0, ")");
      let output = numArr.join("");
      this.value = output;
      //   this.value = numArr.join("");
    } else if (this.value.length == 8 && evt.key !== "Backspace") {
      numArr.splice(8, 0, "-");
      console.log("test");
      console.log(evt.key);
      output = numArr.join("");
      this.value = output;

      //   this.value = numArr.join("");
    }
  },
  false
);
