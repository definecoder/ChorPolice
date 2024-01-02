import React, { useEffect, useState } from "react";
import styled from "styled-components";
import kagoj from "../assets/kagoj.png";
import babu from "../assets/babu.png";
import police from "../assets/police.png";
import chor from "../assets/chor.png";
import dakat from "../assets/dakat.png";
import { Button } from "antd";

const GutiButtonOnline = ({
  playerName,
  shufArray,
  restart,
  scores,
  addScore,
  setScore,
  socket,
  username,
  room,
}) => {
  const [showButton, setShowButton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [policeState, setPoliceState] = useState(false);
  const [lastState, setLastState] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [policeGuess, setPoliceGuess] = useState(-1);
  const [isChor, setIsChor] = useState(true);
  const [showContinue, setShowContinue] = useState(false);
  const gotImage = [chor, dakat, police, babu];
  const bangla = ["চোর", "ডাকাত", "পুলিশ", "বাবু"];
  var curscore = [0, 0, 0, 0];

  var selectedIndex;

  const myguti = 0;
  console.log(shufArray);

  useEffect(() => {
    setIsChor(scores[0].length % 2 == 0);
    console.log(isChor);
  }, []);

  function getIndex() {
    if (scores[0][0] === username) return 0;
    if (scores[1][0] === username) return 1;
    if (scores[2][0] === username) return 2;
    if (scores[3][0] === username) return 3;
    return 0;
  }

  useEffect(() => {
    if (socket) {
      socket.on("dhorse_ore", (indx) => {
        // setLastState(true);
        // setPoliceState(false);
        setShowContinue(true);
        setPoliceGuess(indx);
      });
    }
    return () => {
      if (socket) {
        socket.off("dhorse_ore");
      }
    };
  }, [socket]);

  const buttonClicking = (index) => {
    //console.log("before " + shufArray);
    //console.log("index : " + index);
    //const tmp = shufArray[index];
    //shufArray[index] = shufArray[0];
    //shufArray[0] = tmp;
    //console.log("after" + shufArray);
    setSelectedImage(shufArray[getIndex()]);

    // TODO : DISTRIBUTE 3 to ai
    // res: [0, 1, 3, 2]

    setShowButton(false);
    setShowImage(true);
    setSelectedButton(index);
  };

  const imageClick = () => {
    setShowImage(false);
    setPoliceState(true);
    // render new component
    // police_success = 0 / 1
  };

  function getPolice(x) {
    for (let i = 0; i < 4; i++) {
      if (shufArray[i] == x) return playerName[i];
    }
  }

  function getChorDakat() {
    var ans = [];
    for (var i = 0; i < 4; i++) {
      if (shufArray[i] < 2) ans.push(i);
    }
    return ans;
  }

  function isPoliceCorrect() {
    if (isChor && shufArray[policeGuess] == 0) return true;
    else if (!isChor && shufArray[policeGuess] == 1) return true;    
    return false;
  }

  function getScore() {
    const newScores = [0, 0, 0, 0]; // Create a new array to store the updated scores

    for (let i = 0; i < 4; i++) {
      if (shufArray[i] === 3) newScores[i] = 100;
      else if (shufArray[i] === 2 && isPoliceCorrect()) newScores[i] = 80;
      else if (shufArray[i] === 1) {
        if (isPoliceCorrect() && !isChor) {
          // Do nothing, leave newScores[i] as 0
        } else newScores[i] = 60;
      } else if (shufArray[i] === 0) {
        if (isPoliceCorrect() && isChor) {
          // Do nothing, leave newScores[i] as 0
        } else newScores[i] = 40;
      }
    }

    return newScores;
  }

  return (
    <Wrapper>
      <div className="guti-buttons">
        <div className="gutis">
          {lastState && (
            <div className="last-card">
              {isPoliceCorrect() ? "পুলিশ সঠিক ধরেছেন" : "পুলিশ ভূল ধরেছেন"}{" "}
              <br />
              চোর <span>{isChor && isPoliceCorrect() ? "+০" : "+৪০"}</span>{" "}
              <br />
              ডাকাত <span>
                {!isChor && isPoliceCorrect() ? "+০" : "+৬০"}
              </span>{" "}
              <br />
              বাবু <span>+১০০</span> <br />
              পুলিশ <span>{isPoliceCorrect() ? "+৮০" : "+০"}</span> <br />
              <Button
                onClick={() => {
                  setLastState(false);
                  curscore = getScore();
                  setScore(addScore(curscore, scores));
                  restart();
                }}
              >
                {" "}
                continue{" "}
              </Button>
            </div>
          )}
          {policeState && (
            <div className="police-state">
              <div className="police-state-top">
                <div className="police-state-top-left">
                  <img src={gotImage[selectedImage]} alt="" />
                </div>
                <div className="police-state-top-right">
                  <div>
                    আপনি পেয়েছেনঃ &nbsp; <b>{bangla[selectedImage]}</b>
                  </div>
                  <div>
                    {selectedImage != 2 && (
                      <span>
                        পুলিশ হলোঃ &nbsp; <b> {getPolice(2)}</b>
                      </span>
                    )}
                    {selectedImage == 2 && (
                      <span>
                        বাবু হলোঃ &nbsp; <b> {getPolice(3)}</b>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <center>
                  {" "}
                  {isChor == true ? "চোর কে ধরুন" : "ডাকাত কে ধরুন"}{" "}
                </center>{" "}
              </div>
              <div className="police-state-btm">
                {selectedImage == 2 && (
                  <div classsName="police-state-btm">
                    <Button
                      className="jayga"
                      onClick={() => {
                        
                        socket.emit("dhorsi_ore", {
                          room: room,
                          guess: getChorDakat()[0],
                        });
                        setLastState(true);
                        setPoliceState(false);
                        setPoliceGuess(getChorDakat()[0]);
                      }}
                    >
                      {playerName[getChorDakat()[0]]}
                    </Button>
                    <Button
                      className="jayga"
                      onClick={() => {
                        setLastState(true);
                        setPoliceState(false);
                        setPoliceGuess(getChorDakat()[1]);
                        socket.emit("dhorsi_ore", {
                          room: room,
                          guess: getChorDakat()[1],
                        });
                      }}
                    >
                      {playerName[getChorDakat()[1]]}
                    </Button>
                  </div>
                )}
                {selectedImage != 2 && showContinue && (
                  <Button
                    onClick={() => {
                      setLastState(true);
                      setPoliceState(false);
                    }}
                  >
                    Continue
                  </Button>
                )}
                {selectedImage != 2 && !showContinue && (
                  <p>
                    {getPolice(2)} {isChor == true ? "চোর" : "ডাকাত"} কে
                    ধরছেন...{" "}
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="guti-row">
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="guti">
                {showButton && (
                  <button onClick={() => buttonClicking(index)}>
                    <img src={kagoj} alt="Button Image" />
                  </button>
                )}
                {showImage && selectedButton === index && (
                  <img
                    id="shah"
                    //here put image source;
                    src={gotImage[selectedImage]} // use the index to access the array element
                    alt="Displayed Image"
                    onClick={() => {
                      imageClick();
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="guti-row">
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index + 2} className="guti">
                {showButton && (
                  <button onClick={() => buttonClicking(index + 2)}>
                    <img src={kagoj} alt="Button Image" />
                  </button>
                )}
                {showImage && selectedButton === index + 2 && (
                  <img
                    id="shah"
                    src={gotImage[selectedImage]}
                    alt="Displayed Image"
                    onClick={() => {
                      imageClick();
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .guti-buttons {
    width: 80%;
    height: 80%;
  }
  .gutis {
    display: flex;
  }

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    animation: shake 0.5s ease-in-out infinite;
  }

  .last-card {
    width: 300px;
    font-size: 18px;
    text-align: center;
  }

  .police-state-top-left img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    animation: none;
  }

  #shah {
    height: 100%;
    width: 100%;
  }

  .police-state {
  }

  .police-state-top {
    height: 200px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .police-state-top-left {
    width: 50%;
  }

  .police-state-top-left img {
    width: 80% !important;
    height: 100%;
  }

  .police-state-top-right {
    width: 50%;
  }

  .jayga {
    margin: 10px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .police-state-btm {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    #shah {
      height: 200px;
      width: 200px;
    }
    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
    }
    .police-state-top {
      height: 80px;
      width: 170px;
      font-size: 10px;
    }
    .jayga {
      margin: 10px;
    }
  }
  @keyframes shake {
    0% {
      transform: translate(0);
    }
    25% {
      transform: translate(0, -5px);
    }
    50% {
      transform: translate(0, 5px);
    }
    75% {
      transform: translate(0, -5px);
    }
    100% {
      transform: translate(0);
    }
  }
`;

export default GutiButtonOnline;
