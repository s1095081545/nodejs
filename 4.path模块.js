

// 自带特殊变量
console.log('特殊变量1',__dirname);
console.log('特殊变量2',__filename);

const path=require('path')

console.log('路径拼接',path.join(__dirname,'./data'));

console.log('获取文件名',path.basename(__filename));
console.log('获取文件扩展名',path.extname(__filename));

