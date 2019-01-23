app = require('express')();
//
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var port = 80;
//
//
//
var mname = '', mtable = '';
var names = new Map();
var score = 0;
//
var count = 0;
var num = 0;
//
io.sockets.on('connection', function(socket){
	//
	console.log('connect');
	//
	socket.on('disconnect', function(){
		console.log('disconnect');
	})
	//
	socket.on('message', function(name, table){
		if (!names.has(name)){
			names.set(name, num);
			socket.send('number', num);
			++num;
		}
		//
		if(name == 'ProblemsOffTheEndGame'){
			if (Number(table) > score || score == 0)
				io.sockets.send(Number)
			++count;
			if (count == 2)
				io.sockets.emit('finish');
		}
		else {
			mtable = table;
			io.sockets.send(mtable);
		}
		console.log(name + ' ' + table);
		mname = name;
    })
});

server.listen(port, function(){
	console.log('app running on port ' + port)
})
