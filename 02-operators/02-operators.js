//1.
let d = 1;
let f = 2;
let g = 3;

d < f || f < g ? true : false;
//2.
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""
x = true;

let res2 = "" + x + y;
console.log(res2);
console.log(typeof res2); // ""string""

let res3 = x; 
console.log(res3); // true
console.log(typeof res3); // ""boolean""
x = "text";

let res4 = y * x;
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3.
let isAdult = prompt("Введiть свiй вiк:");
isAdult > 18
  ? alert("Ви досягли повнолітнього віку")
  : alert("Ви ще надто молоді");
//4.
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let newArr = [];
let max = -1;

arr.forEach(item => {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == item) {
      count++;
    }
  }
  count++;
  if (count > max) {
    max = count;
  }
  return max;
});

let index = newArr.indexOf(max);
let data = arr[max];
arr.filter(item => item !== data);

console.log(data); //5

arr = arr.filter(element => element != data);
console.log(arr); // [4, 2, 1, 6, 3, 2]

//5
//Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

const a = parseInt(prompt("Введіть сторону а:"));
const b = parseInt(prompt("Введіть сторону b:"));
const c = parseInt(prompt("Введіть сторону c:"));

//5, 4, 3
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Incorrect data");
} else {
  let pifagor = false;
  if (b < c && a < c) {
    pifagor = c ** 2 === a ** 2 + b ** 2;
  } else if (c < b && a < b) {
    pifagor = b ** 2 === c ** 2 + a ** 2;
  } else if (c < a && b < a) {
    pifagor = a ** 2 === c ** 2 + b ** 2;
  }
  if (pifagor) {
    console.log("Трикутник є прямоугольним");
  } else {
    console.log("Трикутник не є прямоугольним");
  }
  //площa трикутника
  let r = a + b + c;
  let s = parseFloat((a * b * c) / (4 * r));
  //// з точністю 3 знаки після коми !!!!!!
  console.log(s);
}

