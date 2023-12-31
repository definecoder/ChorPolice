import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const [currentGuti, setCurrentGuti] = useState("");
  const [gutiList, setGutiList] = useState([]);

  const [clickedIndex, setClickedIndex] = useState(null);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      console.log(messageList);
    }
  };

  const sendGuti = async () => {
    if (currentGuti !== "") {
      const gutiData = {
        room: room,
        author: username,
        message: currentGuti,

      };
 
      await socket.emit("send_guti", gutiData);
      setGutiList((list) => [...list, gutiData]);
      setCurrentGuti("");
      console.log(gutiList);
    }
  };

  const handleButtonClick = (index) => {
    // Update the state with the clicked index
    setClickedIndex(index);
    setCurrentGuti(`Button ${index + 1} clicked`);
    sendGuti();
    console.log(index);
    
  };




  useEffect(() => {
   

    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      
    });

    return () => socket.removeListener('receive_message')
  }, [socket]);

  useEffect(() => {
    socket.on("receive_guti", (data) => {
      setMessageList((list) => [...list, data]);
      
    });

    return () => socket.removeListener('receive_guti')
  }, [socket]);

 

  return (
    <Wrapper>
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}>
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>

    <div>
      {Array.from({ length: 4 }, (_, index) => (
        <button id='btn' key={index} onClick={() => handleButtonClick(index)}>
          Button {index + 1}
        </button>
      ))}

      {clickedIndex !== null && (
        <p>Button {clickedIndex + 1} was clicked!</p>
      )}
    </div>
    
    </Wrapper>
  );
}

const Wrapper = styled.section`
.dummyClick{
  height: 100px;
  width: 500px;
  border: 2px solid green;
  background-color: red;
}
#btn{
  width: 100px;
}

`;


export default Chat;