import "./Lobby.css";
import avatars from "../../components/avatars";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export default function Lobby() {

    const userData = useLocation().state;
    const navigate = useNavigate();

    return <>
        <center className="lobby-code">LOBBY CODE</center>
        <center className="lobby-code">{userData.roomId}</center>
        <div className="lobby-container">
        <div className="lobby-card"><img src={avatars[userData.avatar]} alt="" /> <span> {userData.username} </span></div>
        <div className="lobby-card"><img src={avatars[0]} alt="" /> <span> Mehraj </span> <Button onClick={() => {}}> Kick </Button></div>
        <div className="lobby-card"><img src={avatars[0]} alt="" /> <span> Mehraj </span> <Button onClick={() => {}}> Kick </Button></div>
        <div className="lobby-card"><img src={avatars[0]} alt="" /> <span> Mehraj </span> <Button onClick={() => {}}> Kick </Button></div>
        </div>   
        <center><Button> Start Game </Button></center>
    </>;

}