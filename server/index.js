import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import dns from "node:dns/promises";

dotenv.config(); // loads .env variables
dns.setServers(["1.1.1.1"]);
const app = express(); 
const port = process.env.PORT || 5000;
connectDB();

app.get("/",(req,res)=>{
    res.send("get route")
})

app.listen(port,()=>{
    console.log("server started http://localhost:5000/")
})