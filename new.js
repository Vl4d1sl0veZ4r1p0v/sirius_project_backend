app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var path = require('path');

var port = 80;

//app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html');

//});

io.sockets.on('connection', function(socket){
	var mname = '', mtable = '';
//	io.sockets.send('0 0 0 2 2 8 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 9');
	socket.on('message', function(name, table){
		mname = name;
                mtable = table;
		//
		io.sockets.send(mtable);
		console.log(mname + ' ' + mtable);
	});

//	socket.emit('updateTable', function(){
//		socket.send('0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 9');		
//	})
//	var arr = [];
//	socket.on('message', function(first, arr){
//		console.log(first);
//		console.log(arr);
//	})
//	socket.send('Hello, world');//автоматичесски message
	//
//	var ID = (socket.id).toString().substr(0, 5);
//	var user = {};
//	user.ID = ID;

	//
//	socket.on('greeting', function(data){
//		console.log(data);
//	});
})

// var rooms = new Map();
// //var MaxPlayers = 4;
// io.sockets.on('connection', function (socket) {
//   //  
//   let ID = (socket.id).toString().substr(0, 5);
//     user = {};
//     user.name = name;
//     user.ID = ID;
//     user.room = room;
//     //
//     console.log(user);
//   //
//   socket.on('SignIn', function(name, room){    
//     //
//       if (rooms.has(room)){
//         rooms[room].add(ID);
//         rooms[room].array.forEach(element => {
//           io.sockets.json.send({'event' : 'userJoined', 'name' : ID});
//         });

//         rooms[room].array.forEach(element => {
//         console.log({'event' : 'userJoined', 'name' : ID});
//         });
        
//       } else {
//         rooms.set(room, new Set());
//         rooms[room].add(user);
//         //
//         rooms[room].array.forEach(element => {
//           console.log({'event' : 'userJoined', 'name' : ID});
//           });
//           //
//       }
//   })

// 	socket.on('disconnect', function() {
// 		io.sockets.json.send({'event': 'userSplit', 'name': user.name});
//   });
//   rooms[user.room].delete(user);
//   if (rooms[user.room].size == 0)
//     rooms.delete(user.room);
//     //
//     rooms[room].array.forEach(element => {
//       console.log({'event' : 'userJoined', 'name' : ID});
//       });
//       //
// });


server.listen(port, function(){
	console.log('app running on port ' + port)
})
