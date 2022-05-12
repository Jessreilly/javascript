const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello there');
    res.end();

}).listen(8080);

console.log('server running on port 8080');
const http = require('http');

http.createServer((req,res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello there');
    res.end();

});

http.Server.listen(8080);
console.log('server running on port 8080')

$ node SVGFEDisplacementMapElement.js
$ curl localhost:8080