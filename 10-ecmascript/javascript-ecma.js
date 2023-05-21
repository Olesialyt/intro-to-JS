// // ************************** 1. **************************
// // Напишіть код в / Ваш код /, щоб він працював
// let names1 = {
//   first: "Tom",
//   second: "Sam",
//   third: "Ray",
//   fourth: "Bob",
// };

// let { first: f, third: x, fifth = "Name №5" } = names1; //fifth: "Name №5"

// console.log(f); // "Tom"
// console.log(x); // "Ray"
// console.log(fifth); // "Name №5"
// // ************************** 2. **************************
// // uncomment below ==>

// let data = {
//   names: ["Sam", "Tom", "Ray", "Bob"],
//   ages: [20, 24, 22, 26],
// };

// let {
//   names: [, name2, , name4],
//   ages: [, age2, , age4],
// } = data;
// console.log(name2);
// console.log(age2);
// console.log(name4);
// console.log(age4);

// // // ************************** 3. **************************
// function mul(...rest) {
//   let mult = 1;
//   let arr = [...rest]
//     .filter(a => typeof a === "number")
//     .map(a => (mult *= a)).length;
//   return arr ? mult : arr; // if an array is 0 => returns arr lenght, otherwise return mult
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
// // // ************************** 4. **************************

// const mapBuilder = (keysArray, valuesArrays) => {
//   const map = new Map();
//   while (valuesArrays.length) {
//     let key = keysArray.shift();
//     let value = valuesArrays.shift();
//     map.set(key, value);
//   }
//   return map;
// };

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"

// // ************************** 5. **************************
// створюється масив, викор цикл,=> три функції. Логіка функцій проста,
//в консоль виводиться значення лічильника на момент створення функції.
// // На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
// // Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику).
var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = function () {
    console.log(i);
  };
}

arr[0](); // 0
arr[arr.length - 1](); // 2
