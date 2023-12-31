import { useState } from "react";
import appLogo from "../../assets/appLogo.png";
import avatars from "../../components/avatars";
import "./LandingPage.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  
  const [selectedAvatar, changeSelectedAvatar] = useState(0);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function changeAvatar() {
    changeSelectedAvatar((selectedAvatar + 1) % 9);
  }

  return (
    <>
      <div className="landing-canvas">
        <div className="landing-left">
          <img src={appLogo} alt="Chor Dakat Babu Police" />
        </div>
        <div className="landing-right">
          <div className="landing-avatar">
            <img src={avatars[selectedAvatar]} alt="avatar" />
          </div>
          <Button onClick={changeAvatar}> change avatar </Button>
          <Input
            placeholder="Enter Username"
            className="username-input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button onClick={() => {
            !username ? alert("enter username first") : navigate("/home", {
                state:{
                    username: username,
                    avatar: selectedAvatar
                }
            });
          }}>continue</Button>
        </div>
      </div>
    </>
  );
}
