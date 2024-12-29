import express from "express";
import mongoose from "mongoose";
// import User from "./models/user.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cors from 'cors';
import { io } from "socket.io";


const app = express();
app.use(express.json());
dotenv.config(); 
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/friendfinder"; 

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      setTimeout(connectWithRetry, 5000);
    });
};
app.use('/users', userRoutes);
app.use('/SignUp',authRoutes); 
app.use('/message',messageRoutes);
connectWithRetry();

app.get("/", (req, res) => res.send("API is running..."));
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
io = io(server, { pingTimeout: 60000 ,cors: { origin: "http://localhost:5000" } });
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => socket.join(room));
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
