let test = document.getElementById("input");

test.addEventListener(
  "keyup",
  function(evt) {
    // var n = parseInt(this.value.replace(/\D/g, ""), 10);
    // test.value = n.toLocaleString();
    let st = this.value.split("");
    if (this.value.length == 4) {
      //   let st = this.value.split("");
      st[0] = "(";
      st[4] = ")";
      this.value = st.join("");
      console.log(this.value.length);
    } else if (this.value.length > 8) {
      st[8] = "-";
      this.value = st.join("");
    }
  },
  false
);
