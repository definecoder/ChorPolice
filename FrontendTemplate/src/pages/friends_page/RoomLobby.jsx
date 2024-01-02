import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";
import "../multiplayer_page/Lobby.css";
import avatars from "../../components/avatars";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import FriensGame from "./FriendsGame";

const RoomLobby = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userval, setUserVal] = useState(false);
  const [users, setUsers] = useState([]);
  const [player2, setPlayer2] = useState("Player 2");
  const [player3, setPlayer3] = useState("Player 3");
  const [player4, setPlayer4] = useState("Player 4");
  const [gameStart, SetGameStart] = useState(false);

  const userData = useLocation().state;
  var usernames;
  const navigate = useNavigate();
  const [players, setPlayers] = useState([
    { avatar: 1, username: username, isHost: true },
    { avatar: 2, username: player2, isHost: false },
    { avatar: 3, username: player3, isHost: false },
    { avatar: 4, username: player4, isHost: false },
  ]);
  const gameStarted = () => {
    if (users.length < 4) {
      alert("You need 4 players to start");
      return;
    }

    usernames = users.map((user) => user.username);
    console.log("notified!");
    socket.emit("notify_others_to_start", { room: room });
    SetGameStart(true);
    // Navigate to another page and pass usernames as state
    // user data contains room and username
  };

  const exitLobby = () => {
    socket.emit("berhoa", { roomId: room });
    navigate("/home", {
      state: {
        username: userData.username,
      },
    });
  };

  useEffect(() => {
    if (socket) {
      socket.on("users_list", (users) => {
        console.log(users.length);

        if (users.length <= 4) {
          // setPlayer2( users[1].username);
          // console.log(player2);

          setUsers(users);
        }
      });
      socket.on("start_game", (flag) => {
        if (flag) SetGameStart(true);
      });
    }
    return () => {
      if (socket) {
        socket.off("users_list");
      }
    };
  }, [socket]);

  return (
    <>
      {gameStart && (
        <FriensGame usernames={users.map(user => user.username)} socket={socket} username={username} room = {room}/>
      )}
      {!gameStart && (
        <div>
          {" "}
          <center className="lobby-code">LOBBY CODE</center>
          <center className="lobby-code">{room}</center>
          <div className="lobby-container">
            {users.map((messageContent, index) => {
              return (
                <div className="lobby-card" key={index}>
                  <img src={avatars[index + 1]} alt="" />
                  <span id="author"> {messageContent.username}</span>
                </div>
              );
            })}
          </div>
          {console.log(users)}
          {users.length > 0 && users[0].username === userData.username && (
            <center>
              <Button onClick={gameStarted}> Start Game </Button>
            </center>
          )}
          {users.length > 0 && users[0].username !== userData.username && (
            <center>
              <Button onClick={exitLobby}> EXIT LOBBY </Button>
            </center>
          )}
        </div>
      )}
    </>
  );
};

export default RoomLobby;
