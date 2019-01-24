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
var maxname = '';
var score = 0;
var room = "0 0 3 0 0 0 0 0 1 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0";
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
			socket.send('number', num.toString());
			if (num == 1){
				io.sockets.send('startGame', room);
				console.log('startGame', room);
			}
			console.log('number', num);
			++num;
		}
		//
		var pos = table.indexOf(' ');
		if (table.substr(0, 21) == 'ProblemsOffTheEndGame' && pos != -1){
			var tnum = table.substr(22, 12);
			console.log('tnum', tnum);
			if (Number(tnum) > score || score == 0){
				score = Number(tnum);
				maxname = name;
				console.log('compare ', score);
			}
			++count;
			if (count == 2){
				io.sockets.send('finish', maxname, score.toString());
				console.log('finish', maxname, score.toString());
			}
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
