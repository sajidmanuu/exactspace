// server/models/Message.js
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  user: String, // Add user field to store the username
  text: String,
  createdAt: { type: Date, default: Date.now }, // Timestamp for message creation
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
