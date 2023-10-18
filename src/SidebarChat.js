import React, { useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import { useState } from 'react';



function SidebarChat({ addNewChat }) {
 
    const [seed, setSeed] = useState(" ");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*29)+ 1);
    }, []);

    const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName){
      // Some Database Stuff
    }
    };

  return !addNewChat ? (
    
      
    <div className="sidebarChat">
      <Avatar src={`https://api.multiavatar.com/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message...</p>
      </div>
      </div> 
  )  : (
     <div onClick={createChat} className='sidebarChat'> <h2>Add New Chat</h2> </div>
  );
}

export default SidebarChat

// useEffect is a hook in react what it does is like it run some code when component loads 