let isEven = function (number) {
  num = Math.abs(number);
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
};

console.log(isEven(1));
console.log(isEven(0));
console.log(isEven(-4));
console.log(isEven(4));
console.log(isEven(-7));
console.log(isEven(7));
