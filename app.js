var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});



io.on('connection', function(socket) {
     socket.on('submitChange', function(data) {
        console.log(data);
        io.sockets.emit('broadChange', data)    });
});
    //console.log('A user connected');
        
        //io.sockets.emit('broadcastChange', changeData)
        //io.sockets.emit('broadcast',{description: clients + ' clients connected!'});
    
    /* socket.on('disconnect', function() {
        clients--;
        socket.broadcast.emit('newclientconnect',{description: clients + ' clients connected'})
        console.log('A user disconnected');
    }); */
 

http.listen(3000, function() {
    console.log('listening on *:3000');
});