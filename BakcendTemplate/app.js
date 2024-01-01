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
const usersInRoom = {};
io.on("connection", (socket) => {

  
    socket.on("join_room", (data) => {
      socket.join(data.room);

      if (usersInRoom[data.room].length > 4) {
        // Clear the array
        usersInRoom[data.room] = [];
        console.log(`Cleared users in room ${data.room}`);
      }
      usersInRoom[data.room].push({ id: socket.id, username: data.username });
  
     
      // Emit the updated list of users to the frontend
      io.to(data.room).emit("users_list", usersInRoom[data.room]);
      
     
    });


    socket.on("send_person", (data) => {
      console.log(data);
    
      socket.to(data.room).emit("receive_message", data);
    });

    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
      });

     
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});




server.listen(3001, () => {
  console.log("SERVER RUNNING");
});