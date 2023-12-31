import React, {useState} from 'react';
import styled from "styled-components";
import kagoj from './kagoj.png';
import babu from './images/babu.png';
import police from './images/police.png';
import chor from './images/chor.png';
import dakat from './images/dakat.png';

const GutiButton = ({shufArray}) => {
    const [showButton, setShowButton] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const gotImage= [chor,dakat,police,babu];
    

    
    const myguti= 0;
    console.log(shufArray);
      

    const buttonClicking = (index) => {
        console.log(shufArray[index]);
        
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
                    //here put image source;
                    src={gotImage[shufArray[index]]} // use the index to access the array element
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
                  <button onClick={() => buttonClicking(index +2)}>
                    <img src={kagoj} alt="Button Image" />
                  </button>
                )}
                {showImage && selectedButton === index + 2 && (
                  <img
                    id='shah'
                    src={gotImage[shufArray[index + 2]]}
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
@media (max-width: 768px) {
    #shah{
        height: 200px;
        width: 200px;
       
    }
    img{
        height: 80px;
        width: 80px;
        object-fit: cover;
    }
    .guti-buttons{
        height: 160px;
        width: 160px;
        
    }

}



`;

export default GutiButton;