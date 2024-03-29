

const express = require('express');
const controller = require('./controllers/controller.js');

const app = express();
const port = 3000;
const {ErrorsHandler, NotTrueUrl, HeadersHandler}=require('./middlewares/middleware.js');

app.listen(port, () => {
console.log(`Server is started with ip: 127.0.0.1 and port: ${port}`);
});

//document.body.addEventListener('click', function (e) {
    
//});

app.use(express.json());
app.use(HeadersHandler);
//app.use(controller);
app.use(NotTrueUrl);
app.use(ErrorsHandler);