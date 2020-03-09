const express = require("express");
const path = require("path");

const app = express();
// 使用 www 目录下的静态资源
app.use("/", express.static(path.join(__dirname, "www")));
app.get("/", (req, res) => {
  const { url } = req;
  console.log(url);
  //   如果 可以匹配到静态资源目录的文件，则下面的发送不显示
  res.send("显示");
});
app.get("/list", (req, res) => {
  const { url } = req;
  console.log(url);
  //   如果定义了路由，但是没有匹配到静态资源目录的文件，则显示下面的
  res.send("这是 list 显示，没有匹配到www目录的文件，但是定义了这个路由");
});
app.listen(8080, () => {
  console.log("服务开启成功", "http://127.0.0.1:8080");
});
