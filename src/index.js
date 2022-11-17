const express = require("express");
const fileRouter = require("./router/index");


const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
    console.log(req?.method);
    let allowedOrigin = ["http://localhost:3000"];
    if (allowedOrigin.indexOf(req.headers.origin) != -1) {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Content-Type, Set-Cookie, authorization"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
    }
    next();
});

app.use("/", fileRouter);

app.listen(5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
