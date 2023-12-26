const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello From Express!!</h1>");
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is listening on port 3000 'http://localhost:3000/'");
});
