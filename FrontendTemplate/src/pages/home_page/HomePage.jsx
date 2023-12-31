import { useLocation, useNavigate } from "react-router-dom";
import avatars from "../../components/avatars";
import appLogo from "../../assets/appLogo.png";
import "./HomePage.css";
import { Input, Button } from "antd";
import HomeBtn from "../../components/home_btn/HomeBtn";

export default function () {
  const userData = useLocation().state;

  return (
    <>
      <div className="home-canvas">
        <div className="home-left">
          <img src={appLogo} alt="Chor Dakat Babu Police" />
        </div>
        <div className="home-right">
          <div className="home-right-header">
            <div className="home-avatar">
              <img src={avatars[userData.avatar]} alt="avatar" />
            </div>
            <div className="home-welcome-text">
            Welcome <span className="home-username">{userData.username}</span>
            </div>
          </div>

          <HomeBtn btnTxt="Play with A.I." nav="/home" userData={userData} />
          <HomeBtn btnTxt="Play Online" nav="/home" userData={userData} />
          <HomeBtn btnTxt="Play with Friends" nav="/home" userData={userData} />
        </div>
      </div>
    </>
  );
}
