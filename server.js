var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);



// Main app configuration
app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

// Render our index view
app.get("/", function(req, res){
res.render("index");
});

// Setup Socket.io

var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket){
	socket.emit('message', {message: "Welcome to the chatroom!"});
	socket.on('send', function(data){
		io.sockets.emit('message', data);
	});
});
console.log("listeing on port 3000, bizatch")