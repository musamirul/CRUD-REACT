//npm install express body-parsel mysql
//npm install nodemon
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello ameirul');
})
app.listen(3001,()=>{
    console.log("running on port 3001");
})