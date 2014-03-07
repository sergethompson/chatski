window.onload = function() {

var messages = [],
// socket = io.connect('http://localhost:3000'),
socket = io.connect(window.location.hostname),
message = document.getElementById('message'),
submitButton = document.getElementById('send'),
content = document.getElementById('content'),
name = document.getElementById('name');


// Connect to websocket
socket.on('message', function(data){
	messages.push(data);
	var html ='';



	// loop through messages and append them to out chat container
	for (var i=0; i<messages.length; i++) {
		html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
		html += messages[i].message + '<br />';
	}
	// Append message to chatroom
	content.innerHTML = html;
});


// Submit our message
submitButton.onclick = function() {
	var text = message.value;
	socket.emit('send', { message: text, username: name.value});
}

$(document).ready(function(){
	$('#message').keyup(function(e){
		if(e.keycode === 13){
			sendMessage();
		}
	});
});

};