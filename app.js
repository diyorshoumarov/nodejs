const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    res.send("<h1>Hello NodeJS. It is my first App</h1>");
});

app.get("/about", (req, res) => {
    res.send("<p>My name is Diyor. My email address is diyorshoumarov@gmail.com</p>");
});

app.use((req, res) => {
    res.status(404).send("404, Not found");
});