import "./Friend_page.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./chat.jsx";
import RoomLobby from "./RoomLobby.jsx";

const socket = io.connect("http://localhost:3001");

function Friend_page() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      const messageData = {
        room: room,
        username: username,
        
      };
      // jekono api call er jonno ei socket id "socket" or api address ta lagbe.
      socket.emit("join_room", messageData); // "join_room" api link er sathe value send korbe
      setShowChat(true);

      
    }
  };


  return (
    <div className="App">

<div className="joinChatContainer">
          <h3>Join A Chat</h3>
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
        </div>
      {!showChat ? (
        <div></div>
      ) : (
        <RoomLobby socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Friend_page;