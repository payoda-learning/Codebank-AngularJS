var express = require("express");
var app = express();

app.use(express.static(__dirname));


app.get("/", function (request, response) {
    response.end("Hello World");
});
app.listen(8080);
console.log("Server running on 8080");