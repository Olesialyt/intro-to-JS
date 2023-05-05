//********************************* 4. *********************************

const fieldset = document.querySelector("fieldset");

const obj = {
  fio: "",
  phone: "",
  birthday: "",
  email: "",
};

const collectData = e => {
  e.preventDefault();

  obj.fio = fieldset.elements.fio.value;
  obj.birthday = fieldset.elements.birthday.value; ///not working
  obj.phone = fieldset.elements.phone.value;
  obj.email = fieldset.elements.email.value;
  addData();
};

const addData = () => {

  const out = document.querySelector(".out");
  out.innerHTML = "";

  const fio = document.createElement("p");
  fio.innerHTML = obj.fio;

  const phone = document.createElement("p");
  phone.innerHTML = obj.phone;

  const birthday = document.createElement("p");
  birthday.innerHTML = obj.birthday;

  const email = document.createElement("p");
  email.innerHTML = obj.email;

  const elements = [fio, phone, birthday, email];

  for (let i = 0; i < elements.length; i++) {
    out.append(elements[i]);
  }
};

const button = document.querySelector(".btn");

button.addEventListener("click", collectData);
