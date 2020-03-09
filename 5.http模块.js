

const http = require("http");

const app = http.createServer();
app.on("request", (request, response) => {
  const { url, method } = request;
  console.log("请求方式", method);
  console.log("请求路径", url);
  //   设置响应头 防止中文乱码
  response.setHeader("content-type", "text/html;charset=utf-8");
  //   response.end("666");
  response.end("中文");
});

app.listen("8080", () => {
  console.log("服务器开启成功，请访问：", "http://127.0.0.1:8080");
});
