const express = require('express')
const app = express()
const PORT = 7999

app.get('/',(req,res)=>{
  res.send("hello world")
})

app.listen(PORT, ()=>{
  console.log("Server is running on", PORT)
})
