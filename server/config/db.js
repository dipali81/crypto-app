import mongoose from "mongoose";

const connectDB = async() => {
    mongoose.connection.on('connected',()=>{
        console.log("mongo connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/crypto`);
}

export default connectDB;