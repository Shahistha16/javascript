let arrayToList = function (arr) {
  let list = {};
  for (let i = 0; i < arr.length; i++) {
    list.value = arr.splice(0, 1)[0];
    list.rest = arr.length > 0 ? arrayToList(arr) : null;
  }
  return list;
};

let listToArray = function (list) {
  let arr = [];
  if (
    typeof list === "undefined" ||
    list.value === undefined ||
    list.rest === undefined
  ) {
    return arr;
  } else {
    arr.push(list.value);
    while (list.hasOwnProperty("rest") && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty("value")) {
        arr.push(list.value);
      }
    }
  }
  return arr;
};

let prepend = function (element, list) {
  return {
    value: element,
    rest: list,
  };
};

let nth = function (list, number) {
  return listToArray(list)[number];
};

let nthRecursive = function (list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
};

console.log(arrayToList([10, 20, 30, 40]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
