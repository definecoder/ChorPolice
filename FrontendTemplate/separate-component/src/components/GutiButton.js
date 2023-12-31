import React, {useState} from 'react';
import styled from "styled-components";
import kagoj from './kagoj.png';
import babu from './images/babu.png';
import police from './images/police.png';
import chor from './images/chor.png';
import dakat from './images/dakat.png';

const GutiButton = () => {
    const [showButton, setShowButton] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [shuffledArray, setShuffledArray] = useState([police, babu, chor, dakat]);

    const imageArray = [police, babu, chor, dakat];
    

    // const buttonClicking = () => {
    //     setShowButton(false);
    //     setShowImage(true);
    
    //   };
    const shuffleArray = (array) => {
        let newArray = array.slice(); // Create a copy of the original array
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };
     const myArray = shuffleArray(imageArray);
     console.log(myArray);
    const myguti= 0;
      

    const buttonClicking = (index) => {
        setShuffledArray(shuffleArray(shuffledArray));
        setShowButton(false);
        setShowImage(true);
        setSelectedButton(index);
      };
    


  return (
    <Wrapper>
            <div className='guti-buttons'>
        <div className='gutis'>
          <div className='guti-row'>
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className='guti'>
                {showButton && (
                  <button onClick={() => buttonClicking(index)}>
                    <img src={kagoj} alt="Button Image" />
                  </button>
                )}
                {showImage && selectedButton === index && (
                  <img
                    id='shah'
                    src={myArray[myguti]}
                    alt="Displayed Image"
                  />
                )}
              </div>
            ))}
          </div>
          <div className='guti-row'>
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index + 2} className='guti'>
                {showButton && (
                  <button onClick={() => buttonClicking(index + 2)}>
                    <img src={kagoj} alt="Button Image" />
                  </button>
                )}
                {showImage && selectedButton === index + 2 && (
                  <img
                    id='shah'
                    src={imageArray[myguti]}
                    alt="Displayed Image"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


    </Wrapper>
  )
}

const Wrapper = styled.section `

.guti-buttons{
    height: 200px;
    width: 200px;
    
}
.gutis{
    display: flex;
}

img{
    height: 100px;
    width: 100px;
    object-fit: cover;
}

#shah{
    height: 400px;
    width: 400px;
   
}



`;

export default GutiButton;