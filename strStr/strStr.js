// slow
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  } else {
    if (haystack.includes(needle)) {
      return haystack.indexOf(needle);
    } else {
      return -1;
    }
  }
};

console.log(strStr("abc", "c"));
