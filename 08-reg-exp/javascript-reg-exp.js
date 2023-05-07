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

const checkEmail = string => /[A-Z][a-z]{4}\d@gmail.com/.test(string);
// checkEmail("Qmail2@gmail.com");

// ****************************** 3. ******************************
let str = "Java Script";
let regExp = /^(\w+) (\w+)$/;
const answer = str.replace(regExp, "$2, $1");
// console.log(answer);
// ****************************** 4. ******************************
const cardValidation = number =>
  /[\d]{4}\-[\d]{4}\-[\d]{4}\-[\d]{4}/.test(number);
// cardValidation("9999-9999-9999-9999");

// ****************************** 5. ******************************

const checkMyEmail = str => {
  let regExp = /^[A-Za-z0-9]((?![\-]{2,})[0-9A-Za-z\_-])*(\@gmail\.com)$/;
  if (regExp.test(str)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
};
// checkMyEmail("my_mail@gmail.com");
// checkMyEmail("#my_mail@gmail.com");
// checkMyEmail("my_ma--il@gmail.com");

// ****************************** 6. ******************************

const checkLogin = string => {
  let regExp = /^(?![0-9])[A-Za-z0-9\.]{2,10}$/;
  let num = /\d*\.?\d/g;

  let str = string.match(num);

  if (regExp.test(string)) {
    console.log(str);
    console.log(true);
  } else {
    console.log(false);
  }
};
// checkLogin("ee1.1ret3");
// checkLogin("ee21r4.3");
// checkLogin("ee1*1ret3");
