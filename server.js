


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 


// port

app.listen(3000, ()=>{
    console.log('Server started at proet no. 3000')
});

// get 

app.get ('/' , (req, res)=>{
    res.send("Hello Dhruvi");
})


// post 

app.post('/api/cars' , (req,res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted");

})
// mongo db and express server
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("connection done")})
.catch((error) =>{console.log("error recieved")});