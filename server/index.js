import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import dns from "node:dns/promises";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // loads .env variables
dns.setServers(["1.1.1.1"]);
const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("get route")
})

app.listen(port, () => {
    console.log("server started http://localhost:5000/")
})