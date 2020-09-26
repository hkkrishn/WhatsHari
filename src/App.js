//Author:Harikrishnan Kuppusamykrishnan
//Project: WhatsApp Clone
//Date: 09/06/2020
//Description: This is the main container for the frontend of the app

import React from 'react';
import Sidebar from './components/sidebar'
import './App.css';
import Chatbox from './components/chatbox';

function App() {
  return (
    <div className="app">
    <div class="app__body">
       {/* SideBar */}
         <Sidebar/>
        {/* Chat Component */}
          <Chatbox/>
    </div>
    </div>
  );
}

export default App;
