import { Avatar } from '@material-ui/core';
//Author:Harikrishnan Kuppusamykrishnan
//Project: WhatsApp Clone
//Date: 09/06/2020
//Description: Component containing individual chat info

//Breakdown is Avatar Chat info


import React from 'react';
import './sidebarchats.css'


const SidebarChat = () => {
  return (
    <div className = "sidebarChat">
        <Avatar/>
        <div class="sidebarChat__info">
            <h2>Room name</h2>
            <p>This is the last message in the room</p>
        </div>
    </div>
  )
}

export default SidebarChat;

