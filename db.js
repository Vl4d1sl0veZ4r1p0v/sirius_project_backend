app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var port = 80;
//
//
//
var mname = '', mtable = '';
//
var room = "0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0";
//
var first = 'Belka', second = 'Kostya';
var p1 = false, p2 = false;
//
io.sockets.on('connection', function(socket){
	//
	console.log('connect ', socket.ID);
	//
	 socket.on('joinRoom', function(name){//проверяем, что это наши люди
			//
			console.log(name, "joined");
			//
	 		if (name == first || name == second){
	 			if (name == first)
	 				p1 = true;
	 			else
	 				p2 = true;
	 		}
	 		//
	 		if (p1 && p2){
	 			io.sockets.emit('gameStart', function(room){
					console.log('gamestart');
					//
	 				io.sockets.send(room);
					 setTimeout(function(){
					 	io.sockets.emit('finish', function(){
					 		io.sockets.close();//возможно закрывать можно просто сокет
					 	})
					 	console.log('The End.');
					 }, 10000)
	 			})
	 		}
	 	})
	// //
//	socket.on('gameTurn', function(name, table){
//		mname = name;
//		mtable = table;
//		//
//		io.sockets.send(mtable);
//		//
//		console.log('gameTurn ' + mname + ' ' + mtable);
//	});
//	//
//	socket.on('finish', function(name){
//		//
//		console.log('finish');
//		//
//		if (name == first || name == second){
//			if (first == name){
//				first = '';
//				p1 = false;
//			} else {
//				second = '';
//				p2 = false;
//			}
//		}
//		if (!(p1 && p2)){
//			io.sockets.send("Finish");
//			io.sockets.close();//возможно закрывать можно просто сокет
//			console.log('Finish');
//		}
//	})


	socket.on('disconnect', function(){
		console.log('disconnect', socket.ID);
	})
	//
	// socket.on('message', function(name, table){
	// 	mname = name;
	// 	mtable = table;
	// 	//
	// 	io.sockets.send(mtable);
	// 	console.log(mname + ' ' + mtable);
	// });
});

server.listen(port, function(){
	console.log('app running on port ' + port)
})
