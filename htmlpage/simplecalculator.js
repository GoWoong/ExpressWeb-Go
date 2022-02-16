const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("웹을 이용한 계산기 서비스 입니다.");
})


app.get('/add',(req,res)=>{
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.send(`숫자 ${String(num1)} + 숫자 ${String(num2)} 는 ${String(num1 + num2)} 입니다.`);
})

app.get('/sub',(req,res)=>{
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.send(`숫자 ${String(num1)} - 숫자 ${String(num2)} 는 ${String(num1 - num2)} 입니다.`);
})

app.get('/mul',(req,res)=>{
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.send(`숫자 ${String(num1)} × 숫자 ${String(num2)} 는 ${String(num1 * num2)} 입니다.`);
})

app.get('/div',(req,res)=>{
  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  res.send(`숫자 ${String(num1)} / 숫자 ${String(num2)} 는 ${String(num1 / num2)} 입니다.`);
})


app.listen(3000,()=>{
  console.log("서버가 정상 실행 합니다.");
})

