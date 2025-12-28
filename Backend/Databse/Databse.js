 require('dotenv').config();
 

const mongoose=require('mongoose')

const  connectToDatabase= async()=>{
    try{
        await mongoose.connect(process.env.MONGOODB_URL)
        console.log("MongooDb connected Sucessfully")
    }
    catch(error)
    {
        console.error("failed to connect MongooDb" ,error)
    }
}

module.exports=connectToDatabase