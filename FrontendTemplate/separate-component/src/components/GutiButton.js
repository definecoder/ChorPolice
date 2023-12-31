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

    const imageArray = [police, babu, chor, dakat];
    const myguti = 2;

    // const buttonClicking = () => {
    //     setShowButton(false);
    //     setShowImage(true);
    
    //   };

    const buttonClicking = (index) => {
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
                    src={imageArray[myguti]}
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