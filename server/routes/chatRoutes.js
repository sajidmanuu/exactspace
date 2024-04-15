// server/routes/chatRoutes.js
import express from 'express';
import ChatController from '../controllers/chatController.js';

const router = express.Router();

router.post('/sendMessage', ChatController.sendMessage);
router.get('/getMessages', ChatController.getMessages);

export default router;
