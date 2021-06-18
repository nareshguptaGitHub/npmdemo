const http = require("http");
http.createServer(function(req,res1){
    res1.writeHead(200,{
        'content-type': 'text/text'
    });
    res1.write("helloqqqqqqssqq2 Word");
    res1.end();
    console.log("daaassssdaad");
}).listen(8080);