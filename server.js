// server.js (Node.js with Express & Socket.io)
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

io.on('connection', (socket) => {
  console.log('New user connected');

  // Handle incoming messages
  socket.on('send_message', (msg) => {
    io.emit('receive_message', msg); // Broadcast the message to all clients
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
