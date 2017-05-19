import * as express from 'express';
import * as http from 'http';
import * as SocketIO from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.use(express.static(__dirname + '/../static'));

io.on('connection', (socket : any) => {
    console.log('Something connected');
});

app.get('/api/casts', (req, res) => {
    res.json(['Kitchen', 'Living Room', 'All']);
});

server.listen(3001, () => console.log("Listening on *:3001"));
