// ****************************** 1. ******************************
const upperCase = string => {
  let regExp = /[A-Z]/;
  if (regExp.test(string)) {
    console.log(`String's starts with uppercase character`);
  } else {
    console.log(`String's not starts with uppercase character`);
  }
};
// upperCase("regexp");
// upperCase("RegExp");

// ****************************** 2. ******************************

const checkEmail = string => {
  let regExp = /[A-Z][a-z]{4}\d@gmail.com/;
  if (regExp.test(string)) {
    console.log(`ok`);
  } else {
    console.log(`not ok`);
  }
};
// checkEmail("Qmail2@gmail.com");

// ****************************** 3. ******************************

// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок: "Java Script"
// Вихід: “Script, Java”

// ****************************** 4. ******************************
const cardValidation = number => {
  let regExp = /[\d]{4}\-[\d]{4}\-[\d]{4}\-[\d]{4}/;
  if (regExp.test(number)) {
    console.log(`ok`);
  } else {
    console.log(`not ok`);
  }
};
cardValidation("9999-9999-9999-9999");
