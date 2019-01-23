app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');

var port = 80;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');

});

var rooms = new Map();

io.sockets.on('connection', function(socket){				
	//
	var user = {};
	socket.on('SignIn', function(name, room){
		//		 
		user.ID = (socket.id).toString().substr(0, 5);;
		//
		user.name = data['name'];
		user.room = data['room'];
		//
		console.log(JSON.stringify(user));
		//
		if (rooms.has(user.room)){
			//
			rooms[user.room].add(user.ID);
			rooms[user.room].array.forEach(element => {
				io.sockets.json.send({'event' : 'userJoined', 'name' : user.name});
			});
		//
		rooms[user.room].array.forEach(element => {
		console.log({'event' : 'userJoined', 'name' : user.name});
		});
		
		} else {
		rooms.set(user.room, new Set());
		rooms[user.room].add(user.ID);
		//
		rooms[room].array.forEach(element => {
			console.log({'event' : 'userJoined', 'name' : user.name});
			});
		}
	})
	//
//	socket.on('disconnect', function() {
//		io.sockets.json.send({'event': 'userSplit', 'name': user.name});
//		//
//		rooms[user.room].delete(user);
//			if (rooms[user.room].size == 0)
//				rooms.delete(user.room);
//		//
//		rooms[room].array.forEach(element => {
//			console.log({'event' : 'userJoined', 'name' : ID});
//		});
//	});		
});

server.listen(port, function(){
	console.log('app running on port ' + port)
})
