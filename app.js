//main conf
var express = require('express');
var app = express();
var io = require('socket.io').listen(3017); 

var rooms = new Map();
//var MaxPlayers = 4;
io.sockets.on('connection', function (socket) {
  //  
  let ID = (socket.id).toString().substr(0, 5);
    user = {};
    user.name = name;
    user.ID = ID;
    user.room = room;
    //
    console.log(user);
  //
  socket.on('SignIn', function(name, room){    
    //
      if (rooms.has(room)){
        rooms[room].add(ID);
        rooms[room].array.forEach(element => {
          io.sockets.json.send({'event' : 'userJoined', 'name' : ID});
        });

        rooms[room].array.forEach(element => {
        console.log({'event' : 'userJoined', 'name' : ID});
        });
        
      } else {
        rooms.set(room, new Set());
        rooms[room].add(user);
        //
        rooms[room].array.forEach(element => {
          console.log({'event' : 'userJoined', 'name' : ID});
          });
          //
      }
  })

	socket.on('disconnect', function() {
		io.sockets.json.send({'event': 'userSplit', 'name': user.name});
  });
  rooms[user.room].delete(user);
  if (rooms[user.room].size == 0)
    rooms.delete(user.room);
    //
    rooms[room].array.forEach(element => {
      console.log({'event' : 'userJoined', 'name' : ID});
      });
      //
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });