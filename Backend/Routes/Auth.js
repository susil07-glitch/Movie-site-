
const express=require('express')
const router=express.Router();

const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs');
const User = require('../../Backend/Model/User');


           /*----------Sing up -------------------*/


router.post("/signup", async (req, res) => {
    const { UserName, email, password } = req.body;

  try {

    if (!UserName || !email || !password) {
      return res.status(400).json({ 
        message: "All fields required" 
          });
    }

    const existUser= await User.findOne({email})
    if(existUser){
      return res.status(400).json({
        message:"User exist already "

      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(password,salt)

    const user= await  User.create({
      name,
      email,
      password:hashPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        CreateAt:user.CreateAt,
        

      }
      
      
    });
    console.log(user)
    
  } catch (error) {
    console.error(error);

    res.status(500).json({
         message: error.message 
        });
  }
});






/*---------------------------Login ----------------------------*/



router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    // validation //

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    //  to check the user is or not //

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not exist, please register first",
      });
    }

    // to matche the password is matching //

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // token generation //

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    console.log("login successful ",user)

  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
});



 module.exports = router ;




