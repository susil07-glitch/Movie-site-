const mongoose =require('mongoose');

const UserSchema=new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,

        },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        requied:true,

    },


},


{timestamps:true}


);


 module.export = mongoose.model.User || mongoose.model("User",UserSchema);

