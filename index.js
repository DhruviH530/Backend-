// INCLUDING EXPRESS module and initialising an app
const express =require('express');

const app = express();

// variable that stores the port number
const PORT = 3000;

// get 
app.get('/', (req,res)=>{
    res.send("hello dhruvi jii")
})

// start the server

app.listen(PORT, ()=>{
    console.log("application started")
})