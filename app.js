const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contact");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is listening on port 3000 'http://localhost:3000/'");
});
