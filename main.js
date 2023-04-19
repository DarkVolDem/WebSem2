
const http = require('http');
const PORT = 3000;
const hostname = "127.0.1.1";

const server = http.createServer((req,res)=>{
    console.log('Rabotaem', "HOST:",req.socket.address().address, "PORT:",req.socket.address().port);
    if (req.url=='/' && req.method=='GET'){
        res.end("Privet-privet");
    }
    else if (req.url=='/comments' && req.method=='POST'){

    }
    else if (req.url=='/stats' && req.method=='GET'){

    }
    else{
        res.end("400 Bad request");
    }
})

server.listen(PORT, hostname, (error) => {
    error ? console.log(error) : console.log(`listening PORT ${PORT}`);
});