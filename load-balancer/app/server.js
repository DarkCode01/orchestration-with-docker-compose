const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`<h1>Node Instance : ${process.env.HOSTNAME}</h1>`);
});

server.listen(8080, (port) => {
  console.log(`app running on :D`);
});
