const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  //whan you cann't create dublicate log tan use this below syntax
  // if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} :${req.url} New req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    // switch (req.url){
    switch (myUrl.pathname) {
      case "/":
        res.end("This Is Home Page.");
        break;
      case "/about":
        const userName = myUrl.query.myname;
        res.end(`Hi ${userName}`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This Is A SignUp Form");
        else if (req.method === "POST") res.end("Success");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
  // console.log(req);
});

myServer.listen(8000, () => console.log("server started!"));
