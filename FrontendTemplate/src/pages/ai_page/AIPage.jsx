import "./AIPage.css";
import { FloatButton } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import GameBoard from "../../components/GameBoard";

import { addScore, getTotalScore } from "../../components/gameControllers";
import { useLocation } from "react-router-dom";
import ScoreModal from "../../components/ScoreModal";

export default function AIPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);
  const [finalScore, setFinalScore] = useState([]);
  const [rank, setRank] = useState([]);

  const userData = useLocation().state;
  var initiated = false;

  const [scores, setScore] = useState([
    ["Amit", 0, 0, 0, 0],
    ["Mehraj", 0, 0, 0, 0],
    ["Shawon", 0, 0, 0, 0],
    ["Nafi", 0, 0, 0, 0],
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

  const round = [100, 0, 60, 40];
  var totalScore = getTotalScore(scores);
  // console.log(totalScore);

  useEffect(() => {}, [scores]);

  useEffect(() => {
    console.log("Scoreee isss: ");
    // console.log(scores[0][scores[0].length - 1]);
    var maxScore = Math.max(...totalScore);
    if (maxScore >= 1500) {
      setIsGameOver(true);
      console.log(isGameOver);
      console.log("yes i am true");
      rankingSet();
      setFinalScore(totalScore);

      gameOverDetails();
    }
  }, [totalScore]);

  function gameOverDetails() {
    var resetScores = scores.map(([name]) => [name]);

    setScore(resetScores);
  }

  function rankingSet() {
    var newTotal = [...totalScore];

    var count = 1;

    var indexArray = [0, 0, 0, 0];

    while (newTotal.some((x) => x > 0)) {
      var p = newTotal.indexOf(Math.max(...newTotal));

      indexArray[p] = count;

      newTotal[p] = 0;

      count++;
    }

    setRank(indexArray);
  }

  function update(new_score) {
    setScore(new_score);
  }

  function initiateGame() {
    //setScore([[userData.username], ["bot-1"], ["bot-1"],["bot-1"],  ]);
    const currentTimestamp = new Date().getTime();
    const randomValue = currentTimestamp % 19;
    const a = peopleNames[randomValue];
    const b = peopleNames[randomValue + 1];
    const c = peopleNames[randomValue + 2];    

    setSelectedNames([userData.username, a, b, c]);
    const tmpScore = [[userData.username], [a], [b], [c]];
    console.log(tmpScore);

    setScore(tmpScore);

    initiated = true;
  }

  useEffect(() => {
    if (!initiated) initiateGame();
  }, []);

  return (
    <>
      {isGameOver && (
        <ScoreModal
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          scores={scores}
          finalScore={finalScore}
          rank={rank}
        />
      )}
      <div className="ai-canvas">
        <div className="ai-left">
          <GameBoard
            totalScore={totalScore}
            scores={scores}
            addScore={addScore}
            setScore={setScore}
            playerName={selectedNames}
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
