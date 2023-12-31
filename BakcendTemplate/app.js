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

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
     
    });
    socket.on("user_list", (data) => {
          console.log(data);
      });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });

  socket.on("send_guti", (data) => {
    //console.log(data);
    socket.to(data.room).emit("receive_guti", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});