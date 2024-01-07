export function addScore(round, scores) {
    // Create a new array by mapping over the existing scores array
    const updatedScores = scores.map((score, index) => {
      // Create a new array with the updated score for each player
      return [...score, round[index]];
    });
  
    return updatedScores; // Return the new array
  }
  

export function getTotalScore(scores) {
  const totalScore = [0, 0, 0, 0];
  for (let i = 0; i < scores.length; i++) {
    for (let j = 1; j < scores[i].length; j++) {
      totalScore[i] += scores[i][j];
    }
  }
  return totalScore;
}

export function getamove() {
  return [0, 1, 2, 3];
  // chor dakat police babu
}

export function updateScore(scores, move, guess) {
  var score = [0, 0, 0, 0];
  var police;

  for (let i = 0; i < 4; i++) {
    if (move[i] === 0) score[i] = 40;
    else if (move[i] === 1) score[i] = 60;
    else if (move[i] === 3) score[i] = 100;
    else if (move[i] === 2) {
      score[i] = 80;
      police = i;
    }
  }
  // correct guess
  if (move[guess] == 1) score[guess] = 0;
  else score[police] = 0;

  addScore(score, scores);
}
