import io from "socket.io-client";
import { useState } from "react";
import appLogo from "../../assets/appLogo.png";
import avatars from "../../components/avatars";
import { Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

function FriendsPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const userData = useLocation().state;
  const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      // jekono api call er jonno ei socket id "socket" or api address ta lagbe.
      socket.emit("join_room", room); // "join_room" api link er sathe value send korbe
      // NAVIGATE
    }
  };

  return (
    <>
      <div className="landing-canvas">
        <div className="landing-left">
          <img src={appLogo} alt="Chor Dakat Babu Police" />
        </div>
        <div className="landing-right">
          <div className="landing-avatar">
            <img src={avatars[userData.avatar]} alt="avatar" />
          </div>
          <div>
            <b>{userData.username}</b>
          </div>
          <Input
            placeholder="Enter Room ID"
            className="username-input"
            onChange={(e) => setRoom(e.target.value)}
          />
          <Button
            onClick={() => {
              !room
                ? alert("enter room id first")
                : navigate("/lobby", {                  
                    state: {
                        ...userData,
                      roomId: room,
                    },
                  });
            }}
          >
            JOIN
          </Button>
          <br />
          <Button
            onClick={() => {              
              navigate("/lobby", {
                state: {
                  ...userData,
                  roomId: "RANDOM",
                },
              });
            }}
          >
            CREATE
          </Button>
        </div>
      </div>
    </>
  );
}

export default FriendsPage;
