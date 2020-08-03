const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', (_, res)=>{
    res.json({
        message:"hello world"
    })
})

app.listen(process.env.PORT || 4300, ()=>{
    console.log('app started')
})