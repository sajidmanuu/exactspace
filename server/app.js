// server.js

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import { sendMessage, getMessages } from './controllers/chatController.js';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

mongoose.connect('mongodb+srv://sajidkhanmanuu:sajid@cluster0.xyv60rw.mongodb.net/chatApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

io.on('connection', async (socket) => {
  console.log('New client connected');

  try {
    const messages = await getMessages();
    socket.emit('previousMessages', messages);
  } catch (error) {
    console.error('Error sending previous messages:', error);
  }

  socket.on('sendMessage', async (messageText) => {
    try {
      const message = await sendMessage(messageText);
      io.emit('receiveMessage', message);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
