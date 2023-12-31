import React from "react";
import styled from "styled-components";
import Players from "./Players";
import ShakeHand from "./ShakeHand";

const GameBoard = () => {
  const playerName = "Rafi"; // Replace with the actual player name
  const playerImage = "";

  return (
    <Wrapper>
      <div className="game-board">
        <div className="player1">
          <div>
            <Players
              playerName={playerName}
              playerImage={playerImage}
              playerScore={123}
              isTopBtm={true}
            />
          </div>
        </div>
        <div className="player2n4">
          <div className="player2">
            <div>
              <Players
                playerName={playerName}
                playerImage={playerImage}
                playerScore={123}
                isTopBtm={false}
              />
            </div>
          </div>
          <div id="shake">
            <ShakeHand />
          </div>
          <div id="player4">
            <Players
              playerName={playerName}
              playerImage={playerImage}
              playerScore={123}
              isTopBtm={false}
            />
          </div>
        </div>

        <div className="player1">
          <Players
            playerName={playerName}
            playerImage={playerImage}
            playerScore={123}
            isTopBtm={true}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .game-board {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 75vw;
  }
  .player2n4 {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }
  .player2 {
    display: grid;
    place-items: center;
  }
  #shake {
    display: grid;
    place-items: center;
  }
  #player4 {
    display: grid;
    place-items: center;
  }

  .player1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .game-board {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 75vh;
    }
    .player2n4 {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
    }
  }
`;

export default GameBoard;
