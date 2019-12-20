function reverseString(s) {
  function swap(left, right) {
    if (left < right) {
      s[left] = s[right];
      s[right] = s[left];
      return swap(left + 1, right - 1);
    }
  }
  swap(0, s.length - 1);
}
