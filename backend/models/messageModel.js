const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chat",
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});


messageSchema.pre('save', function(next) {
  if (this.content.length === 0) {
    next(new Error('Message content cannot be empty'));
  }
  next();
});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;