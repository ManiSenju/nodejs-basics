var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.htm').pipe(res);

  }else if(req.url === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
  }else{
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end("Not Found")
  }

  

}).listen(1337, '127.0.0.1');
