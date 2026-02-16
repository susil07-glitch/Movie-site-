
require("dotenv").config();
const express =require('express')


const app=express();
/*---------Cors------------------*/
const cors=require('cors')

app.use(cors({
     origin: "http://localhost:5173",
    credentials: true
}))


/*---------MiddleWare-------------*/

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const {multer,storage}=require("./MiddleWare/MulterConfigure")

const uplaod =multer({storage:storage})




app.use(express.static('./storage'))

const fs= require('fs');


// DataBase connection//

const connectToDatabase = require("./Databse/Databse");
 connectToDatabase();

 // Routing path //


 const authRoutes=require("./Routes/Auth")
 const WatchedMoviesRoutes=require("./Routes/WatchedMovies")




 /*---------Connecting Routes with Server---------------*/

 app.use("/api/auth",authRoutes)
 app.use("/api/watchedmovie",WatchedMoviesRoutes)



 
 


// Running in port number 3000//


app.listen(process.env.PORT,()=>{
    console.log("Backend started building")
})


