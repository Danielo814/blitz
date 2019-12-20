function reverseString(s) {
  function swap(left, right) {
    let temp = "";
    if (left < right) {
      temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      swap(left + 1, right - 1);
    }
    return;
  }
  swap(0, s.length - 1);
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
