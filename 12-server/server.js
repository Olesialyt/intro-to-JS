const http = require("http");
const personalModule = require("./personalmodule");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const username = os.userInfo().username;

  const greeting = personalModule.greetUser(username);

  const pageContent = `
    <h1>Привітання</h1>
    <p>${greeting}</p>
  `;

  res.end(pageContent);
});

server.listen(5000, "localhost", () => {
  console.log("Сервер запущено на порту 5000");
});
