

import React, { useState } from 'react';
import Picker from 'emoji-picker-react'; // Import Picker from emoji-picker-react
import './ChatInput.css'; // Import custom CSS file

const ChatInput = ({ socket }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const randomUser = user_list[Math.floor(Math.random() * user_list.length)];

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      socket.emit('sendMessage', { user: randomUser, text: inputMessage, timestamp: new Date().toISOString() });
      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
      setShowEmojiPicker(false)
    }
  };

  const handleEmojiClick = (event, emojiObject) => {
    const emojiText = event.emoji; // Extract the emoji text from the alt attribute of the image element
    setInputMessage((prevMessage) => prevMessage + emojiText);
  };

  return (
    <div style={{width:"75%"}}>
      <div className="input-container"> {/* Added custom className */}
        <input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="chat-input" 
          placeholder="Type a message"
        />
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="emoji-button" 
        >
          😊
        </button>
      {/* <button onClick={sendMessage} className="send-button">Send</button> Added custom className */}
      {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
      </div>
    </div>
  );
};

export default ChatInput;

