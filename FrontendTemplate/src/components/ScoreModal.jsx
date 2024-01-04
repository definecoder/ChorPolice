import { Modal, Button, Form, Input, message } from "antd";
import { useState } from "react";


const ScoreModal = (props) => {
  const { isGameOver, setIsGameOver, scores , setScore} = props;

  const [modalInput, setModalInput] = useState("");
  const [modaTitle, setModalTitle] = useState("Enter your Message");

  const resetModal = () => {
    setModalInput("");
    setIsGameOver(false);
    setModalTitle("Enter your Message");
  };
  const handleResetClick = () => {
    
    const resetScores = scores.map(([name]) => [name]);
    
    setScore(resetScores);
  };

  return (
    <Modal
      open= {isGameOver}
      title={modaTitle}
      footer={<Button
        key="back"
        onClick={() => {                    
          setModalInput("");
          setIsGameOver(false);
          handleResetClick();
        }}
      >
        Send
      </Button>}
    >
      <Input
        value={modalInput}
        onChange={(e) => {
          setModalInput(e.target.value);
        }}
      />
    </Modal>
  );
};

export default ScoreModal;
