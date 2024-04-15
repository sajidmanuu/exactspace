import React from 'react'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from './Chat';
const introduction = () => {
  return (
    <div>
      <div className='mt-2 d-flex p-2' style={{justifyContent:'space-between'}}>
              <div className='d-flex flex-column' style={{lineHeight:'5px'}}>

              <h5>Introduction</h5>
              <small className='text-secondary'>This Channel is for Comapany wise Chatter</small>
              </div>
              <div className='d-flex  text-secondary'> <p className='mx-2'> 3 | 100 </p>
              <FontAwesomeIcon icon={faUsers} />
              </div>
            </div>
            <Chat/>
    </div>
  )
}

export default introduction
