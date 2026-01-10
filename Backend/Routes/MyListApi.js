const express=require('express');
const MyList = require('../Model/MyList');


const router=express.Router();


// Add liked Movie //

router.post("/liked/add", async (req, res) => {
  const { userId, movie } = req.body;

  try {
    const result = await MyList.findOneAndUpdate(
      { userId },
      { $addToSet: { movies: movie } }, // like arrayUnion
      { upsert: true, new: true }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// remove added liked movie from liked list //

router.post("/liked/remove", async(req,res)=>{
 const {userId,movie}=req.body

 try{
    const result=await MyList.findByIdAndUpdate(
        {userId},
        {$pull:{movies:movie}}

    )
    res.status(200).json({
        message:"movie removed from liked list "
    })
 }
 catch(error){
    res.status(500).json({
        message:"something went wrong"
    })
 }
})



