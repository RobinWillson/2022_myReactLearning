// res.sendFile
//------------------------------

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("You are on the Home Page");
});
app.get("/windows", (req, res) => {
  res.send("You are on the Windows Page");
});
app.get("/product", (req, res) => {
  res.send("You are on the Home Page");
});

app.listen(3050, () => {
  console.log("server is running");
});