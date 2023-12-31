import { Modal, Button, Form, Input, message } from "antd";
import { useState } from "react";


const ChatModal = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  const [modalInput, setModalInput] = useState("");
  const [modaTitle, setModalTitle] = useState("Enter your Message");

  const resetModal = () => {
    setModalInput("");
    setIsModalOpen(false);
    setModalTitle("Enter your Message");
  };

  return (
    <Modal
      open={isModalOpen}
      title={modaTitle}
      footer={<Button
        key="back"
        onClick={() => {                    
          setModalInput("");
          setIsModalOpen(false);
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

export default ChatModal;
