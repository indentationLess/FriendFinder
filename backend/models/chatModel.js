const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  chatName: { 
    type: String, 
    trim: true,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "message"
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

chatSchema.pre('save', function(next) {
  if (this.users.length !== 2) {
    next(new Error('chat must have exactly 2 users'));
  }
  next();
});

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat;