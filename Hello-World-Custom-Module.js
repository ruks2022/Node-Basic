var Http = require('http');
var dt = require('./myfirstmodule');
Http.createServer(function(req,res){
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end('Hello World');
}).listen(8080);

