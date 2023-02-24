const http = require('http');
const fs = require('fs')
const hostname = '127.0.0.1';
const port = 5555;

const server = http.createServer((req, res) => {
  
  console.log(req.url);
  if(req.url === '/' && req.method === "GET"){
      res.end(fs.readFileSync("./index.html"),"utf-8");
  }
  if(req.url === '/index.css' && req.method === "GET"){
      res.end(fs.readFileSync("./index.css"),"utf-8");
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});