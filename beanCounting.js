let countBs = function (string) {
  let strLength = string.match(/b/g);
  if (strLength == null) {
    return 0;
  } else return strLength.length;
};

let countChar = function (string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
};

console.log(countBs("bbc"));
console.log(countBs("hello"));
console.log(countChar("hello", "l"));
console.log(countChar("hello", "b"));
