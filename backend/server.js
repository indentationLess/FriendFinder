import express from "express";
import mongoose from "mongoose";
// import User from "./models/user.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config(); 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/friendfinder"; 

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    setTimeout(connectWithRetry, 5000);
  });
};
app.use('/users', userRoutes);
app.use('/SignUp',authRoutes); 
connectWithRetry();

app.get("/", (req, res) => res.send("API is running..."));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));