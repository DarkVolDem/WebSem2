
const http = require('http');
const PORT = 3000;
const hostname = "127.0.1.1";

const { parse } = require('querystring');

var comments = '';

var col = 0;
var date_2="<table>";

const server = http.createServer((req,res)=>{
    console.log('Rabotaem', "HOST:",req.socket.address().address, "PORT:",req.socket.address().port);
    if (req.url=='/' && req.method=='GET'){
        res.end("Privet-privet");
    }
    else if (req.url=='/comments' && req.method=='POST'){
        let body = "";
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('data',  ()=>{
            let params = parse(body);
            let json = JSON.stringify(params);
            comments +=json + ' ';
            res.end(comments);
        });
    }
    else if (req.url=='/stats' && req.method=='GET'){
        col+=1;
        date_2+=`<tr><th>user</th><th>${col}</th></tr>`;
        res.end(date_2);
    }
    else{
        res.end("400 Bad request");
    }
})

server.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening PORT ${PORT}`);
});