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

const outerPromise = new Promise(function (resolve, reject) {
  const num = prompt("Tell me your number");
  if (isNaN(num)) {
    reject("Enter a number");
  } else {
    resolve(num);
  }
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
        outerPromise
      // Запитуємо у користувача number, до тих пір, поки він його не введе
      // Після вводу числа - викликаємо resolve(number)
    });
  })
  .then(function (result) {
    // Вивід number у консоль
  });

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
// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// function showNumbers() {
//         // your code with using delay(i, time)
// }
// showNumbers();

// Результат:
// з різним рендомним інтервалом (наприклад від 0 до 3 сек) 
//в консоль послідовно  виводяться числа 0,1,2,3,4,5,6,7,8,9 
//Задачу потрібно реалізувати без застосування промісів. 
//Переписати функцію showNumbers, використовуючи конструкцію async/await.
