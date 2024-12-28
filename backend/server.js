const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const {scoring} = require("./controllers/matching");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/friendfinder"; 

const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
})
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      setTimeout(connectWithRetry, 500);
    });
};

connectWithRetry();
app.get("/test", (req, res) => res.send("Server is running!"));
app.get("/", (req, res) => res.send("API is running..."));
app.post("/api/match", (req, res) => {
  const {userInterests} = req.body;
  if (!userInterests || !Array.isArray(userInterests)){
    return res.status(400).json({error: "invalid input. 'userInterests' must be an array."});
  }
  const matchResult = scoring(userInterests);
  res.status(200).json(matchResult);
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));