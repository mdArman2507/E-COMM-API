import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url=process.env.DB_URL;

export const connectUsingMongoose=async()=>{
    try{
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("mongodb connect using mongoose");
    }catch(err)
    {
        console.log("Error while connect to mongodb");
        console.log(err);
    }
}