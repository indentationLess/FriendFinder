const mongoose = require("mongoose");
//random
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bio: String,
  interests: [String],
});

module.exports = mongoose.model("User", userSchema);
