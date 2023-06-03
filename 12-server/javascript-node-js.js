const http = require("http");
const os = require("os");
const path = require("path");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    const username = os.userInfo().username;
    const osType = os.type();
    const uptime = Math.floor(os.uptime() / 60);
    const currentDirectory = process.cwd();
    const serverFileName = path.basename(__filename);

    response.write(`
    <ul>
      <li>Current user name: ${username}</li>
      <li>OS type: ${osType}</li>
      <li>System work time (in minutes): ${uptime}</li>
      <li>Current working directory: ${currentDirectory}</li>
      <li>Server file name: ${serverFileName}</li>
    </ul>
  `);

    response.end();
  })
  .listen(5000);

console.log("Server is running at http://localhost:5000/");
