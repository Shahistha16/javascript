let deepEqual = function (val1, val2) {
  if (val1 === val2) {
    return true;
  }
  if (
    typeof val1 != "object" &&
    val1 == null &&
    typeof val2 != "object" &&
    val2 == null
  ) {
    return false;
  }
  let x = Object.keys(val1),
    y = Object.keys(val2);
  if (x.length != y.length) {
    return false;
  }
  for (let key of x) {
    if (!y.includes(key) || !deepEqual(val1[key], val2[key])) return false;
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
