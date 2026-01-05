
const express=require('express')
const router=express.Router();

const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs');
const User = require('../Model/User');


/*----------Sing up -------------------*/


router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

  try {

    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: "All fields required" 
          });
    }

    

    const User = User.create({
      name,
      email,
      password,
    });

     await User.save();

    res.status(201).json({
      message: "User registered successfully",
      
    });
    
    console.log(req.body)
  } catch (error) {
    console.error(error);

    res.status(500).json({
         message: error.message 
        });
  }
});



/*---------------------------Login ----------------------------*/

router.post("/login", async(res,req)=>{
   const {email,password}=req.body;
   try{
    const User=await User.findOne({email});
    if(!User){
     return res.status(400).json({
        message:"Invalid Credentails"

     })
    }

     const IsMatched=await bcrypt.compare(password,User.password)

     if(!IsMatched){
        return res.status(400).json({
            message:"Invalids Credentials"
        })
    }

    const token=  jwt.sign({_id:User_id},process.env.JWT_TOKEN ,{
        expiresIn:"7d"
    })

    res.status(201).json({
        token,
        User:{
            _id:User_id,
            email:User.email,

        },

    })
   }catch(error){

    res.status(500).json({
        message:"error.message"
    })
   }


})


 module.exports = router ;




