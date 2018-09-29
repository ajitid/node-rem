const socketio = require('socket.io');

exports.setup = server => {
  socketio(server).on('connection', client => {
    console.log('socket.io connection');

    client.on('message', msg => {
      console.log('on message - ', msg);
    });
  });
};