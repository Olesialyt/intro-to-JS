function greetUser(username) {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Доброго ранку";
  } else if (currentHour < 18) {
    greeting = "Доброго дня";
  } else {
    greeting = "Доброго вечора";
  }

  return `${greeting}, ${username}!`;
}

module.exports = {
  greetUser: greetUser,
};
