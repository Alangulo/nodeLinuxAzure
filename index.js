const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

var theThing = null;
var replaceThing = function () {
  var priorThing = theThing;  // hold on to the prior thing
  var unused = function () {
    // 'unused' is the only place where 'priorThing' is referenced,
    // but 'unused' never gets invoked
    if (priorThing) {
      console.log("hi");
    }
  };
  theThing = {
    longStr: new Array(1000000).join('*'),  // create a 1MB object
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);    // invoke `replaceThing' once every second
