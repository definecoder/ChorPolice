import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import shake from '../assets/shuffle.gif';
import GutiButton from './GutiButton';



const ShakeHand = ({scores, addScore, setScore}) => {


const [showButton, setShowButton] = useState(true);
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

  const handleButtonClick = () => {
    setShuffledArray(shuffleArray(shuffledArray));
    setShowButton(false);
    setShowImage(true);

    setTimeout(() => {
        setShowImage(false);
        setGuti(true);
      }, 4200);
  };

//   useEffect(() => {
//     if (showGuti) {
      
//       console.log('4200ms passed. Now show another div or perform other actions.');
//     }
//   }, [showGuti]);

  


  return (
    <Wrapper>
       <div className='shakee'>
       {showButton && <button className='rounded-button1' onClick={handleButtonClick}>Guti Shake</button>}
      {showImage && (
        <img 
          id='shaking'
          src={shake}
          alt="Displayed Image"
          
        />
      )}

            {showGuti && (
          <div className='guti-button'>
            <GutiButton shufArray={shuffledArray} scores={scores} addScore = {addScore} setScore={setScore} restart={()=>{setShowButton(true); setGuti(false)}}/>
          </div>
        )}
       </div>
       
           
    </Wrapper>
  )
}

const Wrapper = styled.section `


#shaking{
   
    height: 500px
}
.rounded-button1 {
    font-size: 20px;
    height: 40px;
    width: 200px;
    display: inline-block;
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

  .guti-button{
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

    #shaking{
   
        height: 250px
    }


  }
  

`;

export default ShakeHand;