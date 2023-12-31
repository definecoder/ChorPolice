import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import shake from './shuffle.gif';
import GutiButton from './GutiButton';


const ShakeHand = () => {


const [showButton, setShowButton] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showGuti, setGuti] = useState(false);

  const handleButtonClick = () => {
    setShowButton(false);
    setShowImage(true);

    setTimeout(() => {
        setShowImage(false);
        setGuti(true);
      }, 4200);
  };

  useEffect(() => {
    if (showGuti) {
      // Code to run after 4200ms
      // For example, you can make an API call, show another div, etc.
      console.log('4200ms passed. Now show another div or perform other actions.');
    }
  }, [showGuti]);

  


  return (
    <Wrapper>
       <div className='shake'>
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
            <GutiButton/>

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

  .rounded-button1:hover {
    background-color: #2980b9; /* Hover background color */
  }

  .rounded-button1:active {
    transform: scale(0.95); /* Active (click) effect */
  }

`;

export default ShakeHand;