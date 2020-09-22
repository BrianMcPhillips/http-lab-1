const net = require('net');

const server = net.createServer(socket => {
  console.log('connection made');
  socket.on('data', data => {
    console.log(data.toString());

    socket.end('hello');
  });
});

server.listen(7890);
