import React from 'react'
import styled from "styled-components";
import Players from './Players';
import ShakeHand from './ShakeHand';
import GutiButton from './GutiButton';

const GameBoard = () => {
  return (
    <Wrapper>
    <div className='game-board'>
        <div className='player1'>
            <div>
                <Players/>
            </div>
        </div>
        <div className='player2n4'>
           <div className='player2'>
                <div>
                  <Players/>
                </div>
               
           </div>
           <div id='shake'>
                <ShakeHand/>
           </div>
           <div id='player4'>
                <Players/>
           </div>


        </div>


        <div className='player1'>
             <Players/>
        </div>
    
    
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `

.game-board{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justi
    height: 100vh;
    width: 75%;
    border: 2px solid red; 
    
    
}
.player2n4{
    
    height: 600px;
    display: flex;
    justify-content: space-between;

}
.player2{
        
        display: grid;
      place-items: center;
}
#shake{
    
    display: grid;
      place-items: center;
        
}
#player4{
    
    display: grid;
      place-items: center;

}


.player1{
    display: grid;
      place-items: center;
    height: 120px;
}



`;

export default GameBoard