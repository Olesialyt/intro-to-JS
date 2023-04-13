//виводить alert на екран з моїм прізвищем
alert("Литвиненко!");

//оголошення змінних
let num = 10;
let greeting = "Hello";

alert(greeting + " " + num);

greeting = num;
alert(greeting + " " + num);

//об’єкт з 5-ма властивостями:
//“String”
let text = "text";
//“Number”
let number = 0.006;
//“Boolean”
let value = true;
//“Undefined”
let notDecided;
//“Null”.
let empty = null;

let isAdult = confirm("Are you over the age of 18?");
console.log(isAdult);

//змінні, для збереження даних
let name = "Олеся"; //string
let surname = "Литвиненко"; //string
let group = "Javascript Fundamentials"; //string
let birthYear = 2001; //number
let single = true; //string
//Number, Boolean, String
console.log(`${birthYear},  ${single}, ${name}, ${surname}, ${group}`);
//Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
let nothing = null;
let notDefined;
console.log(`${nothing}, ${notDefined}`);
//запитує логін, емейл та пароль
//Dear User, your email is usermale@gmail.com, your password is qwerty
let user = prompt("Enter your Username:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");
alert(`Dear ${user}, your email is ${email}, your password is ${password}`);
//вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
let secondsInHour = 60 * 60;
let secondsInDay = 24 * secondsInHour;
let secondsInMonth = 30 * secondsInDay;
console.log(`${secondsInHour}, ${secondsInDay}, ${secondsInMonth}`);
