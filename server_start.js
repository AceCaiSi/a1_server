const socket = require('socket.io');
const app = socket('3000');
app.on("connection",function (socket) {
	console.log("a user connected");
	socket.emit('connect_result',"hello i am server");
	socket.on('client',function (data) {
		// body...
		console.log(data);
	})
})
console.log('listen on 3000');