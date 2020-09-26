//Author:Harikrishnan Kuppusamykrishnan
//Project: WhatsApp Clone
//Date: 09/06/2020
//Description: Main Container for the sidebar component

import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import './chatbox.css'
import { AttachFile, SearchOutlined,MoreVert } from '@material-ui/icons'

const Chatbox = () => {
  return (
    <div className = "chat">
    <div class="chat__header">
        <Avatar/>
        <div class="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at ...</p>
        </div>
        <div class="chat__headerRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
    </div>

    </div>
  )
}

export default Chatbox
