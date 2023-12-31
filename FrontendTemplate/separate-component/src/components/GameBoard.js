import React from 'react'
import styled from "styled-components";
import Players from './Players';
import ShakeHand from './ShakeHand';


const GameBoard = () => {
    const playerName = ['Amit', 'Nixon', 'Mehraj', 'Shawon']; 
    const playerImage = '&#128516;';


  return (
    <Wrapper>
    <div className='game-board'>
        <div className='player1'>
            <div>
                <Players playerName={playerName[0]} playerImage={playerImage}/>
            </div>
        </div>
        <div className='player2n4'>
           <div className='player2'>
                <div>
                  <Players playerName={playerName[1]} playerImage={playerImage}/>
                </div>
               
           </div>
           <div id='shake'>
                <ShakeHand/>
           </div>
           <div id='player4'>
                <Players playerName={playerName[2]} playerImage={playerImage}/>
           </div>


        </div>


        <div className='player1'>
             <Players playerName={playerName[3]} playerImage={playerImage}/>
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
   
    width: 75%;
    border: 2px solid red; 
    
    
}
.player2n4{
    
    height: 680px;
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

@media (max-width: 768px) {
    .game-board{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       width:100%;
        height: 75%;
        border: 2px solid red; 
        
        
    }
    .player2n4{
    
        height: 450px;
        display: flex;
        justify-content: space-between;
    
    }

  }


`;

export default GameBoard