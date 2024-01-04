import { Modal, Button, Form, Input, message } from "antd";
import { useState } from "react";


const ScoreModal = (props) => {
  const { isGameOver, setIsGameOver, scores , setScore,  finalScore, rank} = props;

  const [modaTitle, setModalTitle] = useState("Game Over");
 
  


  const handleResetClick = () => {
    
    const resetScores = scores.map(([name]) => [name]);
    
    setScore(resetScores);
  };

//   function rankingSet(){

//     var newTotal = [...totalScore];

// var count = 1;

// var indexArray = [0, 0, 0, 0];


// while (newTotal.some(x => x > 0)) {
  
//   var p = newTotal.indexOf(Math.max(...newTotal));
  
 
//   indexArray[p] = count;
  
  
//   newTotal[p] = 0;
  
 
//   count++;
// }

//     setRank(indexArray);
        

//   }



  return (
    <Modal
      open= {isGameOver}
      title={modaTitle}
      footer={<Button
        key="back"
        onClick={() => {                    
          setIsGameOver(false);
          
        }}
      >
        Send
      </Button>}
    >
        {isGameOver ?  <div>
      {/* Display the result */}
      <ul>
        {scores.map((player, index) => (
          <li key={index}>
            {`${player[0]} got ${finalScore[index]} points. Rank: ${rank[index]}`}
          </li>
        ))}
      </ul>
    </div> :
    <p>Result pending</p>
    }
       
     
    </Modal>
  );
};

export default ScoreModal;
