import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";
import mongoose from "mongoose";

dotenv.config();
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


const app = express();

const PORT = process.env.PORT || 5173;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute)
