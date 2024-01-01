import "./AIPage.css";
import { FloatButton } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import ChatModal from "../../components/ChatModal";
import { useEffect, useState } from "react";
import GameBoard from "../../components/GameBoard";

import { addScore, getTotalScore } from "../../components/gameControllers";
import { useLocation } from "react-router-dom";

export default function AIPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useLocation().state;
  var initiated = false;

  const [scores, setScore] = useState([
    ["Amit", 0, 100, 80, 60],
    ["Mehraj", 0, 100, 80, 60],
    ["Shawon", 0, 100, 80, 60],
    ["Nafi", 0, 100, 80, 60],
  ]);

  const round = [100, 0, 60, 40];
  var totalScore = getTotalScore(scores);
  console.log(totalScore);

  useEffect(()=>{
    console.log("rerender");
  }, [scores]);

  function update(new_score){
    setScore(new_score);
  }

  function initiateGame() {
    setScore([[userData.username], ["bot-1"], ["bot-2"], ["bot-3"]]);    
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
          <GameBoard scores={scores} addScore = {addScore} setScore={setScore} />
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
