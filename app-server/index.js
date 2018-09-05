'use strict';
//importing the modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//created the port number
const port = process.env.PORT || 4568;
// parsing the data with middleware bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//models imported here
const db = require('./models');
const { Data } = require('./models');
//routes here
app.post('/input',(req,res)=>{
    const { text } = req.body;
    const data = new Data({text});
    data.save()
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error.message);
    })
})
//server starting here 
app.listen(port,() => {
    console.log(`server started at port ${port}`);
});