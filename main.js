
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
router.get('/stats', (req, res) => {
    
    count += 1;
    date_2 += `<tr><th>user</th><th>${count}</th></tr>`
    res.end(date_2);
});




router.post('/comments', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        params = parse(body);
        json = JSON.stringify(params);
        date += json + ' ';
        res.end(date);
    });
});
module.exports = router;