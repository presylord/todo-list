const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/listData");

app.set("viee engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("list");
});

app.listen(3000, function () {
  console.log("Server is now running at PORT 3000");
});
