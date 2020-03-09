
const express = require("express");
const parse=require('')

const app = express();

app.get("/", (req, res) => {
  res.send("get request");
});

app.listen('8080', () => {
  console.log("启动成功");
});

