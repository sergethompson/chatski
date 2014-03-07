window.onload = function() {

var messages = [],
// socket = io.connect('http://localhost:3000'),
socket = io.connect(window.location.hostname),
message = document.getElementById('message'),
submitButton = document.getElementById('send'),
content = document.getElementById('content'),
name = document.getElementById('name');



};