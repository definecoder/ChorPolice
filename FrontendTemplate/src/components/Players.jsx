import React from "react";
import styled from "styled-components";
import avatars from "../components/avatars";

const Players = ({ playerName, playerImage, isTopBtm, playerScore }) => {
  !playerImage ? (playerImage = avatars[0]) : {};

  return (
    <Wrapper>
      {isTopBtm ? (
        <div className="player-container-h">
         
          <div className="image">
            {" "}
            <img src={playerImage} className="image" alt="" />{" "}
          </div>
          <div className="r8">
            <div className="name">{playerName}</div>
            <div className="score">{playerScore}</div>
          </div>
        </div>
      ) : (
        <div className="player-container">
         
          <div className="image">
            {" "}
            <img src={playerImage} className="image" alt="" />{" "}
          </div>
          <div className="r8">
            <div className="name">{playerName}</div>
            <div className="score">{playerScore}</div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .player-container {
    display: flex;
    height: 15vh;
  }
  .player-container-h {
    display: flex;
    height: 15vh;
    justify-content: center;
  }

  .image {    
    max-width: 100%;
    max-height: 100%;
  }
  .r8{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 20px;    
  }
  .name {
    font-size: 20px;    
  }
  @media (max-width: 768px) {
    .player-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 275px;
    }
    .player-container .image {
        margin-top: -20px;
        max-height: 70%;
    }
    .player-container .r8 {
        margin-top: -80px;
    }
    .r8{
        margin-top: -30px;
        padding: 0px;
    }
    .image {
      max-width: 100%;
      max-height: 100%;
    }
    .name {
      font-size: 25px;
      padding: 20px;
    }
  }
`;

export default Players;
