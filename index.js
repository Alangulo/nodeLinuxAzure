const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    var decimals = [];
var max = 20000;

recurse();

function recurse() {
  decimals.push(Math.floor(Math.random()*10));
  if(decimals.length === max) return;
  recurse();
}
setInterval(replaceThing, 1000);    // invoke `replaceThing' once every second
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


