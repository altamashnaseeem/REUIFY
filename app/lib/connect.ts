// 𝗪𝘄 𝗙𝗶𝗹𝗲𝘀 𝗖𝗼𝗹𝗹𝗲𝗰𝘁𝗶𝗼𝗻𝘀
"use server"
import mongoose from "mongoose";
export async function connect():Promise<void>{
    try{
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("db connected")

    }catch (error){
        console.log(error)
    }
}
export default connect;
