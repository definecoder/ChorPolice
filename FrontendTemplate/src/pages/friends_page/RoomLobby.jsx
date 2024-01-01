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

  const [players , setPlayers] = useState([

    {avatar: 1, username: username, isHost: true},
    {avatar: 2, username: player2, isHost: false},
    {avatar: 3, username: player3, isHost: false},
    {avatar: 4, username: player4, isHost: false},

]);



useEffect(() => {
    if (socket) {
      socket.on('users_list', (users) => {
        console.log(users.length);
        
        setUsers(users);
        if(users.length === 2){
            // setPlayer2( users[1].username);
            // console.log(player2);
            
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
            {players.map((player) => {
                return <div className="lobby-card"><img src={avatars[player.avatar]} alt="" /> <span> {player.username} </span>
                 {!player.isHost && (<Button onClick={() => {}}> Kick </Button>) }</div>;
            })}        
        </div>  
      
      <div className="persons-body">
        
          {
          
          users.map((messageContent) => {
            
            return (
              
                <div >
                
                  
                  <div className="message-meta">
                  
                    <p id="author">{messageContent.username}</p>
                  </div>
                </div>
              
            );
          })}
        
      </div>
      
     
  
    
    </>
  )
}

export default RoomLobby