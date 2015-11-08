var http = require("http");
var os = require("os");
http.createServer(function(request, response) {
    console.log("New request arrived.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hi, you are visiting " + os.hostname() + "\n");
    response.end();
}).listen(80);
console.log("Server is running, listening on port 80....");