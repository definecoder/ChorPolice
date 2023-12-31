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
  io.emit('chat message', socket.id + ' aisoin, shobe salam dew!')

  socket.on('disconnect', () => {
    console.log(socket.id + 'user disconnected');
    io.emit('chat message', socket.id + ' gesoin gi gusa koria!');
  });

  socket.on('chat message', (msg) => {

    msg = `${socket.id} : ${msg}`;
    io.emit('chat message', msg);
  })

});


server.listen(port, () => {
  console.log('server running at http://localhost:'+ port);
});