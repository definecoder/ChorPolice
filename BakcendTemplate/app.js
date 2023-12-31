const port = 8282

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected : ' + socket.id);

  socket.on('disconnect', () => {
    console.log(socket.id + 'user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log(`${socket.id} : ${msg}`);
  })

});


server.listen(port, () => {
  console.log('server running at http://localhost:'+ port);
});