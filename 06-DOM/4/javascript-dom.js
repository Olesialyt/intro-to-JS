//********************************* 4. *********************************
// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const fieldset = document.querySelector("fieldset");
const fio = fieldset.elements.fio;
const phone = fieldset.elements.phone;
const date = fieldset.elements.date;
const email = fieldset.elements.email;
console.log(fio.value);
// const onSubmit = event => {
//   console.log(event);
//   //   const obj = {
//   //     fio: fio.value,
//   //     phone: phone.value,
//   //     date: date.value,
//   //     email: email.value,
//   //   };
//   //   console.log(obj);
// };
function onSubmit() { 
  console.log("i");
};
