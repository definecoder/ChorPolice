import React from 'react';
import io from "socket.io-client";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

const DummyLobby = () => {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
          
          socket.emit("join_room", room); 
          setShowChat(true);
        }
      };
    
 
    return (
        <div className="joinChatContainer">
        <h3>Join A Game Lobby</h3>
        <input
          type="text"
          placeholder="hola..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>

        {!ShowChat ? <div>Hello</div> : <div>Nice</div>
            
        }
      </div>
  )
}

export default DummyLobby;