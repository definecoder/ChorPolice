import React from 'react'
import styled from "styled-components";

const Players = () => {
  return (
    <Wrapper>
    <div className='player-container'>
        <div className='image'>&#128516; </div>
        <div className='name'>Name</div>

    </div>
        
 </Wrapper>

  )
}

const Wrapper = styled.section `

.player-container{
    display: flex;
    height: 90px;
    border: 2px solid green;
}
.image{
    font-size: 50px;
    height: 80px;
    padding: 20px;
}
.name{
    font-size: 40px;
    padding: 20px;
}

`;

export default Players