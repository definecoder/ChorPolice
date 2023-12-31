import React, { useState } from "react";
import styled from "styled-components";
import kagoj from "../assets/kagoj.png";
import babu from "../assets/babu.png";
import police from "../assets/police.png";
import chor from "../assets/chor.png";
import dakat from "../assets/dakat.png";

const GutiButton = ({ shufArray }) => {
  const [showButton, setShowButton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [policeState, setPoliceState] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const gotImage = [chor, dakat, police, babu];
  var selectedIndex;

  const myguti = 0;
  console.log(shufArray);

  const buttonClicking = (index) => {
    console.log(shufArray[index]);
    selectedIndex = shufArray[index];
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
  }

  return (
    <Wrapper>
      <div className="guti-buttons">
        <div className="gutis">
          {policeState && (<div>hello</div>)}
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
                    src={gotImage[shufArray[index]]} // use the index to access the array element
                    alt="Displayed Image"
                    onClick={() => {imageClick()}}
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
                    src={gotImage[shufArray[index + 2]]}
                    alt="Displayed Image"
                    onClick={() => {imageClick()}}
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

  #shah {
    height: 100%;
    width: 100%;
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
  }
  @keyframes shake {
  0% { transform: translate(0); }
  25% { transform: translate(0,-5px); }
  50% { transform: translate(0, 5px); }
  75% { transform: translate(0, -5px); }
  100% { transform: translate(0); }
}
`;

export default GutiButton;
