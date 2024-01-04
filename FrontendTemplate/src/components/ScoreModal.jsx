import { Modal, Button, Form, Input, message } from "antd";
import { useState } from "react";


const ScoreModal = (props) => {
  const { isGameOver, setIsGameOver, scores ,  finalScore, rank} = props;

  const [modaTitle, setModalTitle] = useState("Game Over");
 
  

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
        Restart
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
