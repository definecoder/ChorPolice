import "../ai_page/AIPage.css";
import { FloatButton } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import ChatModal from "../../components/ChatModal";
import { useEffect, useState } from "react";
import GameBoardOnline from "../../components/GameBoardOnline";

import { addScore, getTotalScore } from "../../components/gameControllers";
import { useLocation } from "react-router-dom";

export default function FriensGame({ usernames, socket, username, room }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);
  const userData = useLocation().state;
  userData.username = username;
  userData.avatar = 1;  
  var initiated = false;  

  const [scores, setScore] = useState([
    [usernames[0], 0, 100, 80, 60],
    [usernames[1], 0, 100, 80, 60],
    [usernames[2], 0, 100, 80, 60],
    [usernames[3], 0, 100, 80, 60],
  ]);

  const peopleNames = [
    "John",
    "Jane",
    "Alex",
    "Mark",
    "Ella",
    "Liam",
    "Lucy",
    "Finn",
    "Kate",
    "Ryan",
    "Emma",
    "Luke",
    "Rose",
    "Paul",
    "Lisa",
    "Jack",
    "Anna",
    "Eric",
    "Mia",
    "Jake",
  ];
  
  var totalScore = getTotalScore(scores);

  function initiateGame() {          
    const newScore = [[usernames[0]], [usernames[1]], [usernames[2]], [usernames[3]]];
    setScore(newScore);
    console.log(usernames);
    console.log(scores);
    console.log(newScore);

    initiated = true;
  }

  useEffect(() => {
    if (!initiated) initiateGame();
  }, []);

  return (
    <>
      <ChatModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <FloatButton
        icon={<CommentOutlined />}
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
      <div className="ai-canvas">
        <div className="ai-left">
          <GameBoardOnline
            totalScore={totalScore}
            scores={scores}
            addScore={addScore}
            setScore={setScore}
            playerName={usernames}
            socket = {socket}
            username = {username}
            room = {room}
          />
        </div>
        <div className="ai-right">
          <div>LEADERBOARD</div>
          <div className="leaderboard-body">
            {scores.map((score, index) => (
              <div className="leaderboard-col" key={index}>
                {score.map((point, idx) => (
                  <span key={idx}>
                    {point}
                    <br />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
