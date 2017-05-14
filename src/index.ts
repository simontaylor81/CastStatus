import * as express from 'express';
//import Server from 'http';
import * as SocketIO from 'socket.io'

const app = express();
const http = require('http').Server(app);
const io = SocketIO(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket : any) => {
    console.log('Something connected');
});

http.listen(3001, () => console.log("Listening on *:3001"));
