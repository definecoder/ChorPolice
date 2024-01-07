import React, { useState, useEffect } from "react";
import styled from "styled-components";
import shake from "../assets/shuffle.gif";
import GutiButtonOnline from "./GutiButtonOnline";
import { message } from "antd";

const ShakeHandOnline = ({
  scores,
  addScore,
  setScore,
  playerName,
  socket,
  username,
  room,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showGuti, setGuti] = useState(false);
  const [shuffledArray, setShuffledArray] = useState([0, 1, 2, 3]);

  const shuffleArray = (array) => {
    let newArray = array.slice(); // Create a copy of the original array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    console.log(scores[scores[0].length % 4][0]);
    if (username === scores[scores[0].length % 4][0]) {
      setShowButton(true);
    }
  }, [scores]);

  useEffect(() => {
    if (socket) {
      socket.on("recieve_shuffle", (curShuff) => {
        setShuffledArray(curShuff);
        setShowButton(false);
        setShowImage(true);

        setTimeout(() => {
          setShowImage(false);
          setGuti(true);
        }, 4200);
      });      
    }
    return () => {
      if (socket) {
        socket.off("recieve_shuffle");
      }
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {      
      socket.on("receive_message", (msg) => {
        message.info(msg);
        console.log(msg);
      });
    }
    return () => {
      if (socket) {
        socket.off("receive_message");
      }
    };
  }, [socket]);

  const handleButtonClick = () => {
    socket.emit("guti_shake", {
      room: room,
      shuffleArray: shuffleArray(shuffledArray),
    });

    // setShowButton(false);
    // setShowImage(true);

    // setTimeout(() => {
    //     setShowImage(false);
    //     setGuti(true);
    //   }, 4200);
  };

  //   useEffect(() => {
  //     if (showGuti) {

  //       console.log('4200ms passed. Now show another div or perform other actions.');
  //     }
  //   }, [showGuti]);

  return (
    <Wrapper>
      <div className="shakee">
        {showButton && (
          <button className="rounded-button1" onClick={handleButtonClick}>
            Guti Shake
          </button>
        )}
        {showImage && <img id="shaking" src={shake} alt="Displayed Image" />}

        {showGuti && (
          <div className="guti-button">
            <GutiButtonOnline
              socket={socket}
              username={username}
              playerName={playerName}
              shufArray={shuffledArray}
              scores={scores}
              addScore={addScore}
              setScore={setScore}
              room={room}
              restart={() => {
                // console.log(scores[scores[0].length % 4][0] + " vs " + username );
                // if (username === scores[scores[0].length % 4][0]) {
                //   setShowButton(true);
                // } else setShowButton(false);
                setGuti(false);
              }}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #shaking {
    height: 500px;
  }
  .rounded-button1 {
    font-size: 20px;
    height: 40px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #3498db; /* Default background color */
    color: #fff; /* Default text color */
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }

  .shakee {
    width: 100%;
    height: 100%;
  }

  .guti-button {
    width: 100%;
    height: 100%;
  }

  .rounded-button1:hover {
    background-color: #2980b9; /* Hover background color */
  }

  .rounded-button1:active {
    transform: scale(0.95); /* Active (click) effect */
  }

  @media (max-width: 768px) {
    #shaking {
      height: 250px;
    }
  }
`;

export default ShakeHandOnline;
