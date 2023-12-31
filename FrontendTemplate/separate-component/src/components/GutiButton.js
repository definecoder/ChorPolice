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
                          <img  src={kagoj}  alt="Button Image" />
                           
                </button>
            </div>
            <div className='guti'>
                  <button className='rounded-button'>
                   
                     <img  src={kagoj}  alt="Button Image" />
                </button>
            </div>

        </div>

        <div className='gutis'>
            <div className='guti'>
                  <button className='rounded-button'>
                    
                      <img  src={kagoj}  alt="Button Image" />
                </button>
            </div>
            <div className='guti'>
            <button className='rounded-button'>
                  <img  src={kagoj}  alt="Button Image" />
                           
                </button>
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


`;

export default GutiButton;