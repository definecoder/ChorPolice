import { useState } from "react";
import appLogo from "../../assets/appLogo.png";
import avatar1 from "../../assets/avatars/1.png"
import avatar2 from "../../assets/avatars/2.png"
import avatar3 from "../../assets/avatars/3.png"
import avatar4 from "../../assets/avatars/4.png"
import avatar5 from "../../assets/avatars/5.png"
import avatar6 from "../../assets/avatars/6.png"
import avatar7 from "../../assets/avatars/7.png"
import avatar8 from "../../assets/avatars/8.png"
import avatar9 from "../../assets/avatars/9.png"
import "./LandingPage.css";
import { Input, Button } from 'antd';

export default function LandingPage() {
    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];
    const [selectedAvatar, changeSelectedAvatar] = useState(0);
    const [username, setUsername] = useState("");    

    function changeAvatar() {
        changeSelectedAvatar((selectedAvatar + 1) % 9);
    }

    return <>
        <div className="landing-canvas">
            <div className="landing-left">
                <img src={appLogo} alt="Chor Dakat Babu Police"/>
            </div>
            <div className="landing-right">                
                <div className="landing-avatar">
                    <img src={avatars[selectedAvatar]} alt="avatar" />
                </div>
                <Button onClick={changeAvatar}> change avatar </Button>
                <Input placeholder="Enter Username" className="username-input" onChange={(e) => setUsername(e.target.value)}/>
                <Button onClick={() => {console.log(username)}}>continue</Button>
            </div>
        </div>
    </>;
}