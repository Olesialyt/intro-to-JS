// ************************** 1. **************************
const getPromise = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};
getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

//************************** 2. **************************

const calcArrProduct = arr => {
  return new Promise((resolve, reject) => {
    let lastEl = 1;
    let total = 0;
    arr.forEach(el => {
      if (typeof el === "number") {
        total = lastEl * el;
        lastEl = total;
      } else {
        reject("Error! Incorrect array!");
      }
    });
    resolve(total);
  });
};
calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

// ************************** 3. **************************

new Promise((resolve, reject) => {
  let num = +prompt("Tell me your number");
  isNaN(num) ? reject("You entered not a number") : resolve(num);
})
  .catch(error => {
    return new Promise(function (resolve, reject) {
      alert("Error is: " + error);
      do {
        num = +prompt("You entered not a number, enter a number:");
      } while (isNaN(num));
      resolve(num);
    });
  })
  .then(result => {
    console.log(result);
  });

// ************************** 4. **************************

// ??????????? не знаю
const delay = (i, time) =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(i);
      resolve(i);
    }, time)
  );

function showNumbers() {
  for (let i = 0; i < 10; ++i) {
    const time = Math.floor(Math.random() * 5000);
    delay(i, time);
  }
}
showNumbers();
