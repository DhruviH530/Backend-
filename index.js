const express = require('express')
const app = express()
const port = 3000

// middleware loading app
app.use (express.json());

// creating middleware- loging,auth,validation

// const logingMiddleware = function(req,res,next){
//   console.log('login done')
//   next();
// }

// app.use(logingMiddleware);

// const authMiddleware = function(req,res,next){
//   console.log('auth done')
//   res.send("chalo ghar auth ho gya")
  // next();
// }

// app.use(authMiddleware);

// const validationMiddleware = function(req,res,next){
//   console.log('validation done')
//   next();
// }

// app.use(validationMiddleware);






app.get('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 