const mongoose=require('mongoose')

const  MyListSchema =new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true

    },
    Movies:{
        type:Array,
        default:[],
    },



});

module.exports=mongoose.model("MyList ",MyListSchema);