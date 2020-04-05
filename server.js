const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())


const getGroups = (request, response) => {
  pool.query('SELECT name FROM rooms', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addRoom = (request, response) => {
  const { room_id, name } = request.body

  pool.query("INSERT INTO rooms (room_id, name) VALUES (" + connection.escape(uniqueID) +  "," + connection.escape(chosenName) + ")", [room_id, name], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Room added.' })
  })
}


app.post(addRoom)


app.get('/chat', function(req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' joined the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});
