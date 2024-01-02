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
  const [selectedNames, setSelectedNames] = useState([]);
  const userData = useLocation().state;
  var initiated = false;

  const [scores, setScore] = useState([
    ["Amit", 0, 100, 80, 60],
    ["Mehraj", 0, 100, 80, 60],
    ["Shawon", 0, 100, 80, 60],
    ["Nafi", 0, 100, 80, 60],
  ]);
  const peopleNames = ["John", "Jane", "Alex", "Mark", "Ella", "Liam", "Lucy", "Finn", "Kate", "Ryan", "Emma", "Luke", "Rose", "Paul", "Lisa", "Jack", "Anna", "Eric", "Mia", "Jake"];

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
    //setScore([[userData.username], ["bot-1"], ["bot-1"],["bot-1"],  ]);   
    const currentTimestamp = new Date().getTime();
    const randomValue = currentTimestamp % 19;
    const a = peopleNames[randomValue];
    const b = peopleNames[randomValue+1];
    const c = peopleNames[randomValue+2];

    setSelectedNames([userData.username,a,b,c]);
    
    setScore([[userData.username], [a], [b],[c],  ]); 
   
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
          <GameBoard totalScore={totalScore} scores={scores} addScore = {addScore} setScore={setScore} playerName={selectedNames}/>
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
