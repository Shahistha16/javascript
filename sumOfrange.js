let range = function (start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

let rangeStep = function (start, end, step) {
  let arr = [];
  for (
    let i = start;
    step > 1 || step === undefined ? i <= end : i >= end;
    step ? (i = i + step) : i++
  ) {
    arr.push(i);
  }
  return arr;
};

let sum = function (arr = []) {
  return arr.reduce((x, y) => {
    return x + y;
  });
};

console.log(range(1, 3));
console.log(sum(range(1, 10)));
console.log(range(1, 10));
console.log(rangeStep(5, 2, -1));
console.log(rangeStep(1, 3));
