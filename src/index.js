const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req,res)=>{
    return res.status(200).message("Hello World");
});

app.post('/add',(req,res)=>{
    console.log("add");
    
    const {num1,num2} = req.body;
    if(typeof(num1) == "string"||typeof(num2) == "string"){
        return res.status(200).json({
            status: "failure",
            message: "Invalid data types"
        })
    }
    
    if(num1>1000000||num2>1000000){
        return res.status(200).json({
            status: "error",
            message: "Overflow"
        })
    }
    const sum = num1 + num2;
    return res.status(200).json({
        status: "success",
        message: "the sum of given two number",
        sum: sum
    })

});

app.post('/sub', (req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1) == "string"||typeof(num2) == "string"){
        return res.status(200).json({
            status: "failure",
            message: "Invalid data types"
        })
    }
    if(num1<1000000||num2<1000000){
        return res.status(200).json({
            status: "error",
            message: "Underflow"
        })
    }
    const sub = num1 - num2;
    return res.status(200).json({
        status: "success",
        message: "the difference of given two number",
        sum: sub
    })

})

app.post('/multiply', (req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1) == "string"||typeof(num2) == "string"){
        return res.status(200).json({
            status: "failure",
            message: "Invalid data types"
        })
    }
    if(num1>1000000||num2>1000000){
        return res.status(200).json({
            status: "error",
            message: "overflow"
        })
    }

    const result = num1*num2;
    return res.status(200).json({
        status: "success",
        message: "The product of given numbers",
        result: result
    })


})

app.post('/divide',(req,res)=>{
    const {num1,num2} = req.body;
    
    if(num2==0){
        return res.status(200).json({
            status: "error",
            message: "Cannot divide by zero"
        });
    }
    const result = num1/num2;
    return res.status(200).json({
        status: "success",
        message: "The division of given numbers",
        result: result
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;