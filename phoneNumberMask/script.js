let test = document.getElementById("input");

test.addEventListener(
  "keyup",
  function(evt) {
    let st = this.value.split("");
    console.log(st);
    if (this.value.length == 4) {
      st.splice(0, 0, "(");
      st.splice(4, 0, ")");
      this.value = st.join("");
    } else if (this.value.length == 8) {
      st.splice(8, 0, "-");
      this.value = st.join("");
    }
  },
  false
);
