//1.
let arr = [1, 2, 3, 4, 6, 2, 6];
const sumSliceArray = (arr, first, second) => {
  const err = new Error(`RangeError,a number "out of range" has occurred`);
  if (isNaN(first) || isNaN(second)) {
    throw "The input has to be a number";
  } else if (first - 1 > arr.length || second - 1 > arr.length) {
    throw err;
  }
  return arr[first - 1] + arr[second - 1];
};

try {
  sumSliceArray(arr, 1, 5);
} catch (error) {
  console.log(error);
}

//2.
function checkAge() {
  const name = prompt("enter your name:");
  const age = prompt("enter your age:");
  const status = prompt("enter your status:");
  if (age < 18 || age > 70) {
    throw `RangeError, a number "out of range" has occurred`;
  } else if (!name || !age || !status) {
    throw "Error, The field is empty! Please enter your age";
  } else if (
    !(status === "адмін" || status === "модератор" || status === "користувач")
  ) {
    throw "EvalError, wrong input";
  }
}
checkAge();

//3.
const calcRectangleArea = (width, height) => {
  if (isNaN(width) || isNaN(height)) {
    throw "Error, an illegal input has occurred";
  }
  return width * height;
};

try {
  calcRectangleArea("h", 8);
} catch (error) {
  console.log(error);
}

//4.
const months = {
  1: "Січень",
  2: "Лютий",
  3: "Березень",
  4: "Квітень",
  5: "Травень",
  6: "Червень",
  7: "Липень",
  8: "Серпень",
  9: "Вересень",
  10: "Жовтень",
  11: "Листопад",
  12: "Грудень",
};
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}
function showMonthName(month) {
  const monthNum = Object.keys(months);
  if (!monthNum[month]) {
    throw new MonthException("Incorrect month number");
  } else {
    alert(`Місяц який ви ввели є: ${months[month]}`);
  }
}
try {
  const month = prompt("Введіть цифру:");
  showMonthName(month);
} catch (err) {
  console.error(err.name + ": " + err.message);
}

//5.
class RangeError extends Error {
  constructor(message, id) {
    super(message);
    this.name = "Error";
    this.id = id;
  }
}

const showUser = id => {
  if (id < 0) {
    throw new RangeError("ID must not be negative", id);
  }
  const obj = {
    id: id,
  };
  return obj;
};

const showUsers = ids => {
  let arr = [];
  for (const id in ids) {
    let checkedId = showUser(ids[id]);
    arr.push(checkedId);
    console.log(checkedId);
  }
  console.log(arr);
  return arr;
};
try {
  showUsers([7, -12, 44, 22]);
} catch (error) {
  console.error(error.name + ": " + error.message + ": " + error.id);
}
