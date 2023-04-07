require("dotenv").config();    
const express = require("express");   

const db = require("./db/connect");                                           
const cors = require('cors');
const jwt = require ('jsonwebtoken');


const app = express(); 

db();
const registerRouter = require("./router/registerRouter");
const userRouter = require("./router/userRouter");
const itemRouter = require("./router/itemRouter");
const createError = require("./utils/createError");

app.get('/', (req, res) => {
    res.send('Welcome to my app!');
})

//middleware to convert incoming data into json format
app.use(cors());
app.use(express.json());
app.use("/register",registerRouter);

authentication
app.use("/",  (req,res,next) => {
    const token = req.headers.accesstoken
    if(!token){
      return res.status(400).send({msessage:"Token not found"})
    }
    return jwt.verify(token,process.env.SECRET_KEY,(err,decoded) => {
        if(err){
          return next (createError({status:401,message:"InvalidToken"}));
        }
        req.user=decoded;
      return next();
      });
      
    })
    
  
  app.use("/users",userRouter);
  app.use("/items",itemRouter);
 


const PORT = process.env.PORT || 4000;



app.listen(PORT,()=>{                                                              
    console.log(`App is running on port ${PORT}`);
})