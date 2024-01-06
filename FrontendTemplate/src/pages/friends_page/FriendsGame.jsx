import "../ai_page/AIPage.css";
import { FloatButton } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import ChatModal from "../../components/ChatModal";
import { useEffect, useState } from "react";
import GameBoardOnline from "../../components/GameBoardOnline";
import ScrollToBottom from "react-scroll-to-bottom";
import { addScore, getTotalScore } from "../../components/gameControllers";
import { useLocation } from "react-router-dom";
import ScoreModal from "../../components/ScoreModal";

export default function FriensGame({ usernames, socket, username, room }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [rank, setRank] = useState([]);
  const [finalScore, setFinalScore] = useState([]);
  const userData = useLocation().state;
  userData.username = username;
  userData.avatar = 1;
  var initiated = false;

  const [scores, setScore] = useState([
    [usernames[0], 0, 0, 0, 0],
    [usernames[1], 0, 0, 0, 0],
    [usernames[2], 0, 0, 0, 0],
    [usernames[3], 0, 0, 0, 0],
  ]);

  var totalScore = getTotalScore(scores);

  function initiateGame() {
    const newScore = [
      [usernames[0]],
      [usernames[1]],
      [usernames[2]],
      [usernames[3]],
    ];
    setScore(newScore);
    console.log(usernames);
    console.log(scores);
    console.log(newScore);

    initiated = true;
  }

  useEffect(() => {
    if (!initiated) initiateGame();
  }, []);

  useEffect(() => {
    console.log("Scoreee isss: ");    
    // console.log(scores[0][scores[0].length - 1]);
    var maxScore = Math.max(...totalScore);
    if (maxScore >= 140) {
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

  return (
    <>
      {isGameOver ? (
        <ScoreModal
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          scores={scores}
          finalScore={finalScore}
          rank={rank}
        />
      ) : (
        <ChatModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} socket={socket} username={username} room={room} />
      )}
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
            socket={socket}
            username={username}
            room={room}
          />
        </div>
        <div className="ai-right">
          <div>LEADERBOARD</div>
          <ScrollToBottom className="message-container">
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
          </ScrollToBottom>
        </div>
      </div>
    </>
  );
}
