const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/tours', (req:any,res:any)=>{
    res.status(200).json({
    
    })
})


app.listen(port,()=>{
    console.log(`Listening to Port ${port}`);
})

