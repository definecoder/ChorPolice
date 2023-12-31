import React from 'react';
import styled from "styled-components";
import kagoj from './kagoj.png';

const GutiButton = () => {
  return (
    <Wrapper>
    <div className='guti-buttons'>
        <div className='gutis'>
            <div className='guti'>
                      <button className='rounded-button'>
                    Guti 1
                           
                </button>
            </div>
            <div className='guti'>
                  <button className='rounded-button'>
                   
                           Guti 2
                </button>
            </div>

        </div>

        <div className='gutis'>
            <div className='guti'>
                  <button className='rounded-button'>
                    
                           Guti 3
                </button>
            </div>
            <div className='guti'>
            <button className='rounded-button'>
                    Guit 4
                           
                </button>
            </div>

        </div>


    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `

.guti-buttons{
    height: 240px;
    width: 240px;
    
}
.gutis{
    display: flex;
}
.guti{
    height: 120px;
    width: 120px;
}
img{
    height: 120px;
    width: 120px;
    object-fit: cover;
}
.rounded-button {
    font-size: 20px;
    height: 80px;
    width: 100px;
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #3498db; /* Default background color */
    color: #fff; /* Default text color */
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }

  .rounded-button:hover {
    background-color: #2980b9; /* Hover background color */
  }

  .rounded-button:active {
    transform: scale(0.95); /* Active (click) effect */
  }

`;

export default GutiButton;