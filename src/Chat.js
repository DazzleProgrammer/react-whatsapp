import React from 'react';
import './Chat.css';
import { Avatar } from '@mui/material';
import { useState, useEffect } from 'react';
import {IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
// import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';


function Chat() {
   const [input, setInput] = useState(" ");
   const [user, setUser] = useState(" ");
   useEffect(()=>{
    setUser(Math.floor(Math.random()*9));
}, []);

// Send Message Fxn
const sendMessage = (e) =>{
    e.preventDefault();
    console.log("You Typed >>>", input);

    setInput("");
};



  return (
    <div className="chat">

        <div className="chat__header">
              <Avatar src={`https://api.multiavatar.com/${user}.svg`}/>
              {/* <Avatar src='https://xsgames.co/randomusers/avatar.php?g=female' /> */}

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            
            </div>
            
            <div className="chat__headerRight">
                <IconButton> <SearchOutlinedIcon /> </IconButton>
                <IconButton> < AttachFile /> </IconButton>
                <IconButton> <MoreVertIcon /> </IconButton>

            </div>
        </div>

        <div className="chat__body">
         <p className={`chat__message ${true && "chat__receiver"}`}>
         <span className='chat__name'> Dazzle Programmer</span>
            Heyyyyaaaaaaa
            <span className='chat__timestamp'>6:00 pm</span>
            </p>
         
         
        </div>

        <div className="chat__footer">
        <IconButton> <InsertEmoticonIcon /> </IconButton>
        <IconButton> <AddIcon/> </IconButton>
        
        <input value={input} 
        onChange = {(e) => setInput(e.target.value)}
        placeholder='Type a message' 
        type='string'>
        </input> 
        <IconButton> <KeyboardVoiceOutlinedIcon/> </IconButton>  
         <button className='send__button' type='submit' onClick={sendMessage}>  <SendIcon/>  </button>    
 

        </div>
      
    </div>
  )
}

export default Chat;
