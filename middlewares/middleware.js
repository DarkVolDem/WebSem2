async function ErrorsHandler(err, req, res, next) {
    console.log("Error handler:", err);
    res.status(500).json({ message: err.message });
    }
    
    async function NotTrueUrl(req, res, next) {
    res.status(400).json({ message: "Not found" });
    }
    
    async function HeadersHandler(req, res, next) {
    if (req.headers["content-type"] !== "application/json") {
    res.status(400).json({
    status: "error",
    message: "Неверные данные",
    });
    } else {
    next();
    }
    }
    
    async function LogRequest(req, res, next) {
    console.log("Request:", req.method, req.url);
    next();
    }
    
    module.exports = { 
        ErrorsHandler, 
        NotTrueUrl, 
        HeadersHandler, 
        LogRequest 
    };
