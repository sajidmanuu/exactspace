// // client/src/App.js

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000');

// const App = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   useEffect(() => {
//     socket.on('previousMessages', (previousMessages) => {
//       setMessages(previousMessages.reverse());
//     });

//     socket.on('receiveMessage', (message) => {
//       setMessages(prevMessages => [...prevMessages, message]); // Use functional update to ensure state consistency
//     });

//     return () => {
//       socket.off('previousMessages');
//       socket.off('receiveMessage');
//     };
//   }, []);

//   const sendMessage = () => {
//     socket.emit('sendMessage', inputMessage);
//     setInputMessage('');
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>{message.text}</div>
//         ))}
//       </div>
//       <input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default App;
// client/src/App.jsimport React from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import PolandOffice from './components/polandOffice';
import Introduction from './components/introduction';
import IndiaOffice from './components/indiaOffice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 sidebar p-4 ">
            <div className='d-flex'>
              <span className='mx-2 text-center' style={{background:'#ec8e8f', padding:'10px', borderRadius:'50%',color:'#fff', height:'50px', width:'50px' }}>RR</span>
              <div className='d-flex flex-column mt-2' style={{lineHeight:'5px'}}>
                <p>Rolande Rainmondi</p>
                <small className='text-secondary'>Research Nurse</small>
              </div>
            </div>
            <div className="conversion">
              <div className='d-flex mt-3' style={{justifyContent:'space-between'}}>
                <p>Conversations</p>
                <FontAwesomeIcon icon={faPlus}/>
              </div>
              <ul type="none">
                <li className='mt-3'>
                  <small className='rounded mx-2 p-2 bg-outline-primary' style={{ background: '#eef0f2', height: '30px' }}>
                    #
                  </small>
                  <NavLink 
                    to="/polandoffice" 
                    style={{ color: '#000', textDecoration: 'none' }} 
                    activeStyle={{ backgroundColor: '#629df4', color: '#fff' }}
                  >
                    Poland Office
                  </NavLink>
                </li>
                <li className='mt-3'>
                  <small className='rounded mx-2 p-2 bg-outline-primary' style={{ background: '#eef0f2', height: '30px' }}>
                    #
                  </small>
                  <NavLink 
                    to="/introduction" 
                    style={{ color: '#000', textDecoration: 'none' }} 
                    activeStyle={{ backgroundColor: '#629df4', color: '#fff' }}
                  >
                    Introduction
                  </NavLink>
                </li>
                <li className='mt-3'>
                  <small className='rounded mx-2 p-2 bg-outline-primary' style={{ background: '#eef0f2', height: '30px' }}>
                    #
                  </small>
                  <NavLink 
                    to="/indiaoffice" 
                    style={{ color: '#000', textDecoration: 'none' }} 
                    activeStyle={{ backgroundColor: '#629df4', color: '#fff' }}
                  >
                    India Office
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 main-content" style={{background:'#edf1f5'}}>
            <Routes>
              <Route path="/polandoffice" element={<PolandOffice />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/indiaoffice" element={<IndiaOffice />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
