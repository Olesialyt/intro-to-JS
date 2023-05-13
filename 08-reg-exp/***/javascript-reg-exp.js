const form = document.querySelector("form");
let notExist = true;

form.addEventListener("submit", e => {
  e.preventDefault();
  const fullName = form.elements.fullName.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const password = form.elements.password.value;
  // const confirmPassword = form.elements.confirmPassword.value;

  /[A-Z][a-z]* [a-z]*/.test(fullName);
  /^(?![\d])([A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+)@([A-Za-z]+)\.[a-z]+$/.test(
    email
  );

  /\+[0-9]{2}\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/.test(phone);

  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=.*?[\@#$%^&*_])[A-Za-z0-9\@#$%^&*_]{12,}$/.test(
    password
  );
  const p = document.createElement("p");
  const passwordLabel = document.querySelector('label[for="password"]');

  if (password.length < 12) {
    do {
      p.style.color = "red";
      p.innerHTML = "Password should be at least 12 characters long";
      passwordLabel.append(p);
      notExist = false;
    } while (notExist);
  } else if (password.length >= 12 && password.length <= 14) {
    console.log("orange");
  } else if (password.length >= 14) {
    console.log("green");
  }
});

// The question mark (?=) signals the start of a lookahead assertion. This means that the regex engine will look ahead at the next characters to check if they match a pattern.
// The dot (.) matches any character.
// The asterisk (*) means "zero or more occurrences of the preceding expression".
// [A-Z] is a character class that matches any uppercase letter.
