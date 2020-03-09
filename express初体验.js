// 导包
const express = require("express");
//创建服务器
const app = express();
// 绑定事件
app.get("/", (req, res) => {
  const { method, url } = req;
  console.log(url);

  res.send("hello word,这是使用express nodeJS的web框架实现的响应");
});
// 监听服务器
app.listen(8080, () => {
  console.log("服务开启成功", "http://127.0.0.1:8080");
});
