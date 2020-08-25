let reverseArray = function (arr) {
  let revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
};

let reverseArrayInPlace = function (arr) {
  let temp = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
};

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1, 2, 3]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
