var app = require("express")();/*,
    // import the mongoose library
    app = express();*/
var http = require('http').Server(app);
/*var io = require('socket.io')(http);
*///app.use(express.static(__dirname + "/client"));


http.listen(4000, function(){
    console.log("The users are managed on port 4000!");
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  /*socket.on('todo added', function(msg){
    console.log('Message: ' + msg);
    io.emit('todo added to server', msg);
  });*/
});