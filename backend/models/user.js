import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  bio: {
    type: String,
    required: false,
    max : 200
  },
  interests: [String],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min : 8 
  },
});

module.exports = mongoose.model("User", userSchema);
