import * as express from 'express';
import * as http from 'http';
import * as SocketIO from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket : any) => {
    console.log('Something connected');
});

server.listen(3001, () => console.log("Listening on *:3001"));
