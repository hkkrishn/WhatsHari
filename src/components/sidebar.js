//Author:Harikrishnan Kuppusamykrishnan
//Project: WhatsApp Clone
//Date: 09/06/2020
//Description: Main Container for the sidebar component

//The origanization of the sidebar is the following
    //Sidebar
        //Container1
            // Avatar Settings
        //Container2
            //SearchBox
        //Container3
            //List of chatrooms

import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar,IconButton} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons';

import SidebarChat from './sidebarchats'

const Sidebar = () => {
  return (
    <div className = "sidebar">
    {/* Main Header */}
        <div class="sidebar__header">
        <Avatar src = 'https://avatars2.githubusercontent.com/u/16485130?s=460&u=991bfd229558ee035a7b4e8c1644642a9ad78bf0&v=4'/>
            <div class="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
            </div>
        </div>
        {/* SearchBar */}
        <div class="sidebar__search">
            <div class="sidebar__searchContainer">
                <SearchOutlined/>
                <input type="text" placeholder = "Search or start new chat"/>
            </div>
        </div>
        {/* Chat List*/}
        <div class="sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar

