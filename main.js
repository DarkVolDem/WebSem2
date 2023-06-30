import express from "express";
import controller from "./controllers/controller.js";
import { ErrorsHandler, NotTrueUrl, HeadersHandler } from "./middlewares/middleware.js";

const app = express();
const port = 5500;

app.listen(port, () => {
console.log(`Server is started with ip: 127.0.0.1 and port: ${port}`);
});

app.use(express.json());
app.use(HeadersHandler);
app.use(controller);
app.use(NotTrueUrl);
app.use(ErrorsHandler);