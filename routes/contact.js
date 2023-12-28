const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/contact", (req, res) => {
  const { name, email } = req.body;
  


  res.redirect("/success");
});

module.exports = router;
