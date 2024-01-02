import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";
import "../multiplayer_page/Lobby.css";
import avatars from "../../components/avatars";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";


const RoomLobby = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userval, setUserVal]= useState(false);
  const [users, setUsers] = useState([]);
  const [player2, setPlayer2]= useState("Player 2");
  const [player3, setPlayer3]= useState("Player 3");
  const [player4, setPlayer4]= useState("Player 4");
  const [gameStart, SetGameStart]= useState(false);

  const userData = useLocation().state;
  const navigate = useNavigate();
  const [players , setPlayers] = useState([

    {avatar: 1, username: username, isHost: true},
    {avatar: 2, username: player2, isHost: false},
    {avatar: 3, username: player3, isHost: false},
    {avatar: 4, username: player4, isHost: false},

]);
const gameStarted = () => {
  const usernames = users.map(user => user.username);

   // Navigate to another page and pass usernames as state
   navigate("/multiplayer", {state : {
    ...userData,
    players: usernames,
}})
};



useEffect(() => {
    if (socket) {
      socket.on('users_list', (users) => {
        console.log(users.length);
        
        
        if(users.length <= 4){
            // setPlayer2( users[1].username);
            // console.log(player2);

            setUsers(users);
        }
      });
    }
    return () => {
        if (socket) {
          socket.off('users_list');
        }
      };
  }, [socket]);

  
  return (
    <>
    <center className="lobby-code">LOBBY CODE</center>
        <center className="lobby-code">{room}</center>
        
        
      
      <div className="lobby-container">
        
          {
          
          users.map((messageContent, index) => {
            
            return (
                  <div className="lobby-card" key={index}>
                  <img src={avatars[index+1]} alt="" /> 
                    <span id="author"> {messageContent.username}</span>
                  </div>
            );
          })}
        
      </div>
      <center><Button onClick={gameStarted}> Start Game </Button></center>
      
    
    </>
  )
}

export default RoomLobby