// ************************** 1. **************************
// const getPromise = (message, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// };
// getPromise("test promise", 2000).then(function (data) {
//   console.log(data);
// });

//************************** 2. **************************

// const calcArrProduct = arr => {
//   return new Promise((resolve, reject) => {
//     let lastEl = 1;
//     let total = 0;
//     arr.forEach(el => {
//       if (typeof el === "number") {
//         total = lastEl * el;
//         lastEl = total;
//       } else {
//         reject("Error! Incorrect array!");
//       }
//     });
//     resolve(total);
//   });
// };
// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

// ************************** 3. **************************

// new Promise((resolve, reject) => {
//   let num = +prompt("Tell me your number");
//   isNaN(num) ? reject("You entered not a number") : resolve(num);
// })
//   .catch(error => {
//     return new Promise(function (resolve, reject) {
//       alert("Error is: " + error);
//       do {
//         num = +prompt("You entered not a number, enter a number:");
//       } while (isNaN(num));
//       resolve(num);
//     });
//   })
//   .then(result => {
//     console.log(result);
//   });

// ************************** 4. **************************
// Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом
//(від 0 до N мілісекунд). Використовуючи проміси потрібно змінити цикл так,
//щоб числа виводилися в строгій послідовності від 0 до 10. Наприклад,
//якщо виведення нуля займає 4 секунди, а одиниці 2 секунди,
//то одиниця повинна дочекатися виведення  нуля і тільки потім почати
//свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time),
//яка повертає проміс, який резолвиться поточним значенням числа-лічильника циклу і,
//яке виводиться через час time мілісекунд.

// Приклад  роботи:

// const delay = (i, time) =>
//   new Promise(resolve => setTimeout(() => {
//     console.log(i)
//     resolve(i)
//   }, time));

// function showNumbers() {
//   for (let i = 0; i < 10; ++i) {
//     const time = Math.floor(Math.random() * 5000);
//     delay(i, time).then(num => {
//       console.log("after " + num);
//     });
//   }
// }
// showNumbers();

// const delay = (i, time) =>
//   setTimeout(() => {
//     console.log(i + " " + time);
//   }, time);

// function showNumbers() {
//   for (let i = 0; i <= 10; ++i) {
//     const time = Math.floor(Math.random() * 7000);
//     delay(i, time);
//   }
// }
// showNumbers();

// Результат:
// з різним рендомним інтервалом (наприклад від 0 до 3 сек)
//в консоль послідовно  виводяться числа 0,1,2,3,4,5,6,7,8,9
//Задачу потрібно реалізувати без застосування промісів.
//Переписати функцію showNumbers, використовуючи конструкцію async/await.

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Done");
//   }, 2000);
// });
// p.then(function (result) {
//   console.log(result);
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(true);
//     }, 2000);
//   });
// }).then(function (result) {
//   // result will contain result of the promise from the previous then()
//   console.log(result);
// });
