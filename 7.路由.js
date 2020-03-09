

const fs=require('fs')
const path=require('path')
const http=require('http')

const app=http.createServer()
app.on('request',(request,response)=>{
    const {method,url}=request
    if(url==='/' || url==='/index'){
        const filePath=path.join(__dirname,'www/index.html')
        fs.readFile(filePath,(err,data)=>{
            if(err){
                response.end('数据读取错误')
            }else{
                response.end(data)
            }
        })
    }
})
app.listen('8080',()=>{
    console.log('服务器开启成功','http://127.0.0.1:8080');
})