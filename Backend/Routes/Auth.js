
const express=require('express')
const router=express.Router();

const jwt=require('jsonwebtoken')
const User=require('../Model/User')
const bcrypt=require('bcryptjs');
const User = require('../Model/User');


/*----------Sing up -------------------*/

router.post("/singUp", async ( req,res)=>{
    const {email,name,password}=req.body;

    try{
        if(!email || !name || !password ){
            return res.status(400).json({
                message:"All fields are required "
            })

        }

        const UserExist = await User.findOne({email})

        if (UserExist){
            return res.status(400).json({

                message:"User already exist"

            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)

        const User= User.create({
            name,
            email,
            password,

        })
   const token=jwt.sign({id: User_id}, process.env.JWT_TOKEN,{
        expiresIn:"7d",
   })
   res.status(201).json({
    token,
    User:{
        _id:User_id,
        name:User.name,
        email:User.email,

    }
    ,
   })

    }catch(error){
        res.status(500).json({
            message:"erroe.message"

        })
    }
})



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


 module.exports=router ;




