// server/controllers/chatController.js
import Message from '../models/Message.js';

const sendMessage = async (message) => {
  try {
    const { user, text } = message;
    console.log(message);
    const newMessage = new Message({ user, text });
    await newMessage.save();
    return newMessage;
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};

const getMessages = async () => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(10);
    return messages;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

export { sendMessage, getMessages };
