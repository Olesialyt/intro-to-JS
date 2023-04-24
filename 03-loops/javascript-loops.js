//1.
function createArray(start, end) {
  let arr = [];
  for (let i = start; i <= end; ++i) {
    arr.push(i);
  }
  return arr;
}
let result = createArray(2, 9);
// console.log(result);

//2.
let a = 3;
let b = 10;

let arr = [];
for (let i = 1; i <= b; ++i) {
  for (let j = 1; j <= i; ++j) {
    arr.push(a);
  }
  ++a;
}
// console.log(arr);

//3.
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; ++i) {
    const randNum = Math.floor(Math.random() * 500) + 1;
    arr.push(randNum);
  }
  return arr;
}
// console.log(randArray(5));

//4.
const compact = arr => (arr = [...new Set(arr)]);
// console.log(compact([5, 3, 4, 5, 6, 7, 3]));

//5.
// prettier-ignore
const array = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let numberArray = [];
let stringArray = [];

function typeChecker(el) {
  if (typeof el === "number") {
    numberArray.push(el);
  } else if (typeof el === "string") {
    stringArray.push(el);
  } else if (Array.isArray(el)) {
    el.forEach(e => typeChecker(e));
  }
}
array.forEach(el => {
  typeChecker(el);
});

// console.log(numberArray);
// console.log(stringArray);

//6.
const calc = (a, b, op) => {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
};
// console.log(calc(10, 2, 3));

//7.
const findUnique = arr => {
  const hasDublicates = arr.some((el, position) => {
    return arr.indexOf(el) !== position; //поверне true якщо э дублiкат.
  });
  return hasDublicates ? false : true;
};
// console.log(findUnique([1, 2, 3, 5])); //true
