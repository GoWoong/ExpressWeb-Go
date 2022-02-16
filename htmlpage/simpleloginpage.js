const express = require('express');
const fs = require('fs');
const app = express();

app.get('/',(req,res)=>{
  fs.readFile('index.html',(error,data) =>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
  })
})

app.get('/main',(req,res)=>{
  fs.readFile('main.html',(error,data) =>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(data);
  })
})
app.listen(3003, () =>{
  console.log('server start .');
})