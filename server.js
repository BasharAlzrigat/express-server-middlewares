'use strict';

const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3030
const cors = require('cors');
const errorHandler=require('./error-handlers/500');
const validator=require('./middlewares/validate-number')

app.use(cors())
app.use(express.json());
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
})

//http://localhost:3030/person?name=${name}
app.get('/square',validator,(req,res)=>{
    let num=req.query.num
const object={
    "validator-state": "Based",
    'num before square':Number(num),
    'num after square':num*num
}
    res.status(200).json(object)
})


function start() {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }

  module.exports = {
    app,
    start
  }