const http = require("http");
const os = require("os");
const path = require("node:path");
const userInfo = os.userInfo();

http
  .createServer(function (request, response) {
    response.write(
      `Current user name: ${
        os.userInfo().username
      }; OS type: ${os.type()}; System work time: ${Math.floor(
        os.uptime() / 60
      )}; Current working directory: ${path.dirname(
        "/Users/mac/Desktop/intro-to-JS/intro-to-JS/12-server/javascript-node-js.js"
      )}; Server file name: `
    );
    end();
  })
  .listen(5000);
