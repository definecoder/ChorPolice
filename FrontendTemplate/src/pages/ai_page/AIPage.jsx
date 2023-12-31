import "./AIPage.css";

export default function AIPage() {
  const scores = [
    ["Amit", 0, 100, 80, 60],
    ["Mehraj", 0, 100, 80, 60],
    ["Shawon", 0, 100, 80, 60],
    ["Nafi", 0, 100, 80, 60],
  ];
  var totalScore = [];
  const round = [100, 0, 60, 40];
  function addScore(round) {
    for (let i = 0; i < scores.length; i++) {
      scores[i].push(round[i]);
    }
  }
  addScore(round);
  function getTotalScore() {
    totalScore = [0, 0, 0, 0];
    for (let i = 0; i < scores.length; i++) {
      for (let j = 1; j < scores[i].length; j++) {
        totalScore[i] += scores[i][j];
      }
    }
    console.log(totalScore);
  }
  getTotalScore();
  return (
    <>
      <div className="ai-canvas">
        <div className="ai-left">
          {totalScore.map((score) => (
            <div> {score} </div>
          ))}
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
