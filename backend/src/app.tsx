const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.status(200).json({
        msg
    })
})


app.listen(port,()=>{
    console.log(`Listening to Port ${port}`);
})

