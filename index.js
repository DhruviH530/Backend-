// // creating https server with express

const { profile } = require("console");

// // express.
// // node default laibrary


// const express = require("express");

// const app = express();


// // function sum (n){
// //     let ans = 0;
// //     for(let i =1; i<=n; i++){
// //         ans = ans +1
// //     }
// //     return ans;
// // }

// app.get("/" , function(req,res){
//     // const n = req.query.n;
//     // const ans = sum(n)
//     // res.send("Hi dhruvii your ans is" + ans)
// })


// app.listen(3000)






const express = require("express");
const app = express();


 const users  = [{
    name:"dhruvi",
    kindney :[{
        healthy : false
    }]
 }];

  app.use(express.json());   


 app.get('/', function(req,res) {
    // write logic here 
 
    const dhruvikidneys = users[0].kindney;
    const numberOfKindneys = dhruvikidneys.length;
    let numberOfHealthyKindneys = 0;
    for (let i=0; i<dhruvikidneys.length; i++){
            if(dhruvikidneys[i].healthy){
                numberOfHealthyKindneys = numberOfHealthyKindneys +1
            }
    }

    const numberOfUnhealthyKindney = numberOfKindneys - numberOfHealthyKindneys;
    res.json({
        numberOfKindneys,
        numberOfHealthyKindneys,
        numberOfUnhealthyKindney
    })
})


app.post ('/' , function (req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kindney.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done ! Thank you "
    })
})





app.listen(3000);

