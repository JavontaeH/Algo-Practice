//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

const isValid = (s) => {
  const arr = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = arr[arr.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else if (s[i] === ")" && top === "(" && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === "]" && top === "[" && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === "}" && top === "{" && arr.length !== 0) {
      arr.pop();
    } else {
      return false;
    }
  }

  return arr.length === 0;
};

// 1. need matching pairs
// 2. if another bracket is opened it needs to be closed before the bracket its held within

// true
console.log(isValid("()"));
console.log(isValid("({[]})"));
// false
console.log(isValid("(]"));
console.log(isValid("(({[]})"));
console.log(isValid("([)]"));
