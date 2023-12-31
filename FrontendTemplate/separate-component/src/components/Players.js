import React from 'react'
import styled from "styled-components";

const Players = ({ playerName, playerImage }) => {
  return (
    <Wrapper>
    <div className='player-container'>
        <div className='image'>&#128516; </div>
        <div className='name'>{playerName}</div>

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
@media (max-width: 768px) {
    .player-container{
        display: flex;
        flex-direction: column;
        jusitfy-content: center;
        height: 90px;
        border: 2px solid green;
    }
    .image{
        font-size: 25px;
        height: 40px;
        padding: 8px;
    }
    .name{
        font-size: 25px;
        padding: 20px;
    }
  }


`;

export default Players