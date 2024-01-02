const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
const connectedUsers = [];

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
const usersInRoom = {}, curShuffle = {};
io.on("connection", (socket) => {

  
    socket.on("join_room", (data) => {
      socket.join(data.room);
      if (!usersInRoom[data.room]) {
        usersInRoom[data.room] = [];
      }

      if(data.username !== ""){
      usersInRoom[data.room].push({ id: socket.id, username: data.username });
      }
     
      // Emit the updated list of users to the frontend
      io.to(data.room).emit("users_list", usersInRoom[data.room]);
      console.log(usersInRoom[data.room]);
     
    });


    socket.on("notify_others_to_start", (data) => {
      const isStart = true;
      curShuffle[data.room] = [];
      io.to(data.room).emit("start_game", isStart);      
      console.log(curShuffle);
    });


    //guti shake
    socket.on("guti_shake", (data) => {
      curShuffle[data.room] = data.shuffleArray;
      io.to(data.room).emit("recieve_shuffle", curShuffle[data.room]);
      console.log("shuffle recived and sent to all", curShuffle[data.room]);
    });


    // ke konta paise 
    //police kare dhorse
    //coninue

    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
      });

      socket.on("berhoa", (data) => {
        
        usersInRoom[data.roomId] = usersInRoom[data.roomId].filter(user => user.id !== socket.id);
        
        io.to(data.roomId).emit("users_list", usersInRoom[data.roomId]);
        console.log(usersInRoom[data.roomId]);
      });

     
  socket.on("disconnect", () => {
    console.log("User Disconnected",  socket.id);    
  });  
});




server.listen(3001, () => {
  console.log("SERVER RUNNING");
});