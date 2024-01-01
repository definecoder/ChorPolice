import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";

const RoomLobby = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userval, setUserVal]= useState(false);
  const [users, setUsers] = useState([]);

  const sendMessage = async () => {
    
      const messageData = {
        room: room,
        author: username,
        
      };

      await socket.emit("send_person", messageData);
      
      

  };

//   useEffect(() => {

//     console.log(messageList);
    
// }, []);

useEffect(() => {
    if (socket) {
      socket.on('users_list', (users) => {
        console.log(users);
        setUsers(users);
      });
    }
    return () => {
        if (socket) {
          socket.off('users_list');
        }
      };
  }, [socket]);

  useEffect(() => {
    if(!userval){
        const messageData = {
            room: room,
            author: username,
            
          };
          setMessageList((list) => [messageData]);
          setUserVal(true);
    }
    
    socket.on("receive_message", (data) => {
      
        const existingMessageIndex = messageList.findIndex(
            (message) => message.author === username
          );
      
          if (existingMessageIndex === -1) {
            setMessageList((list) => [...list, data]);
          }
       // setMessageList((list) => [...list, data]);
      
      
    });

    return () => socket.removeListener('receive_message')
  }, [socket]);

  //joined room

 
 

  
  return (
    <>
    <div className="chat-window">
      
      <div className="persons-body">
        
          {
          
          users.map((messageContent) => {
            
            return (
              
                <div >
                
                  
                  <div className="message-meta">
                  <p id="author"></p>
                    <p id="author">{messageContent.username}</p>
                  </div>
                </div>
              
            );
          })}
        
      </div>
     
    </div>
    
    </>
  )
}

export default RoomLobby