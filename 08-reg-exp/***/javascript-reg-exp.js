const form = document.querySelector("form");

console.log(form);
form.addEventListener("submit", e => {
  e.preventDefault();
  form.elements.fullName.value;
  form.elements.email.value;
  form.elements.phone.value;
  form.elements.password.value;
  form.elements.confirmPassword.value;
});
