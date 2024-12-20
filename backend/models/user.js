const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  
  major: { 
    type: String, 
    required: true,
  },
  graduationYear: { type: Number, required: true },
  
  bio: { type: String, maxlength: 500 },
  profilePicture: { 
    url: String,
    contentType: String
  },
  
  music: {
    favoriteArtists: [String],
    favoriteGenres: [String]
  },
  
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model("user", userSchema);