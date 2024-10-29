const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

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

connectWithRetry();
app.get("/test", (req, res) => res.send("Server is running!"));
app.get("/", (req, res) => res.send("API is running..."));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));