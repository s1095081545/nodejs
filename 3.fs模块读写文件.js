

// 导入模块
// fs模块无法创建目录

const fs = require("fs");
// 异步写入
fs.writeFile("fs.txt", "nodeJS使用fs模块写入文件内容", err => {
  if (err) {
    console.log("异步 写入失败");
  } else {
    // 写入成功err=null
    console.log("异步 写入成功");
  }
});

// 同步写入
// try catch 捕获同步运行失败‘
try{
  fs.writeFileSync('f:/fs1.txt','同步写法');
}catch(error){
console.log('同步 运行失败');

}
