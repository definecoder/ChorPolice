export function addScore(round, scores) {
    var update = scores;
    for (let i = 0; i < update.length; i++) {
    update[i].push(round[i]);
  }
  return update;
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
  return [1, 2, 3, 4];
}

export function updateScore(scores, move, guess) {
  var score = [0, 0, 0, 0];
  var police;

  for (let i = 0; i < 4; i++) {
    if (move[i] == 1) score[i] = 40;
    else if (move[i] == 2) score[i] = 60;
    else if (move[i] == 3) score[i] = 100;
    else if (move[i] == 4) {
      score[i] = 80;
      police = i;
    }
  }
  // correct guess
  if (move[guess] == 1) score[guess] = 0;
  else score[police] = 0;

  addScore(score, scores);
}
