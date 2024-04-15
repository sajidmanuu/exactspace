// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ChatMessage = ({ message }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const getUserColor = (userName) => {
    const firstTwoLetters = userName.substring(0, 2).toUpperCase();
  
    switch (firstTwoLetters) {
      case 'CA':
        return '#dd4b52';
      case 'DE':
        return '#d5e369';
      case 'AL':
        return '#ec8e8f';
      case 'EL':
        return '#9fb1fc';
      case 'BO':
        return '#8fd3f4';
      default:
        return '#ccc'; // default color
    }
  };
  

  // Function to format the message timestamp
  const formatTimestamp = (timestamp) => {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();
    
    // Check if the message date is not today
    if (
      messageDate.getDate() !== currentDate.getDate() ||
      messageDate.getMonth() !== currentDate.getMonth() ||
      messageDate.getFullYear() !== currentDate.getFullYear()
    ) {
      // Show the date if the message is from a previous date
      return `${messageDate.toLocaleDateString()} ${messageDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
    } else {
      // Show only time if the message is from today
      return messageDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
  };

  return (
    <div style={{margin:"40px 0px"}}><div className='d-flex text-center users'  >
      
        {/* <FontAwesomeIcon icon={faUser} className='mx-2' /> */}
        <p 
          className='border text-center d-flex mx-2'
          style={{
            background:getUserColor(message.user),
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            color: '#fff',
            alignItems: 'center',
            marginLeft: '0px',
            justifyContent: 'center'
          }}
        >
          {message.user}
        </p>
        {message.user} {formatTimestamp(message.createdAt)}:
      </div>
     
      <span style={{margin:"5px 0", marginLeft:"40px", padding:"15px 30px"}} className='bg-light border rounded'>{message.text}</span>
      
      <button onClick={handleLike} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '-5px', fontSize: 'inherit', verticalAlign: 'middle' }}>
        👍<sup>{likes}</sup>
      </button>
    </div>
  );
};

export default ChatMessage;
