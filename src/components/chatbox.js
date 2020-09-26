//Author:Harikrishnan Kuppusamykrishnan
//Project: WhatsApp Clone
//Date: 09/06/2020
//Description: Main Container for the sidebar component

import React from 'react'
import {Avatar,IconButton} from '@material-ui/core'
import './chatbox.css'
import { AttachFile, SearchOutlined,MoreVert, InsertEmoticon } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'

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
    <div class="chat__body">
        <p className = "chat__message">
        <span class="chat__name">
            Hari
        </span>
        Test message
        <span class="chat__timestamp">
            {new Date().toUTCString()}
        </span>
        </p>

        <p className = "chat__message chat__receiver">
        <span class="chat__name">
            Dingle
        </span>
        Test message
        <span class="chat__timestamp">
            {new Date().toUTCString()}
        </span>
        </p>
    </div>
    <div class="chat__footer">
        <InsertEmoticon/>
        <form>
            <input placeholder = "Type a message" type = "text"/>
            <button type = "submit">Send a message</button>
        </form>
        <MicIcon/>


    </div>

    </div>
  )
}

export default Chatbox
