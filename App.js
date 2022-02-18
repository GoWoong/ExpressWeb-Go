const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('htmlpage'));

app.get('/',(req,res) => {
  res.sendFile(`${__dirname}/htmlpage/main.html`);
});

app.get('/hello',(req,res) => {
  res.send('<h1>Hello World!!!</h1>');
});

app.post('/',(req,res) => {
  res.send('<h1>POST World!!!</h1>');
});

app.listen(3000,()=>{
  console.log("서버실행이 성공했습니다.");
});