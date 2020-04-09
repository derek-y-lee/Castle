const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const pool = require('./config.js').pool;
const pg = require('pg');

const path = require('path')
pg.defaults.ssl = true;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())


app.use(express.static(path.join(__dirname, 'build')));


const getGroups = (request, response) => {
  pool.query('SELECT name FROM rooms', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addRoom = (request, response) => {
  let randID = Math.random().toString(13).replace('0.', '')

  // let randID = "98sdf98jk"
  const { room_id, name } = request.body
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }

    client.query("INSERT INTO rooms (room_id, name) VALUES ($1, $2)", [randID, name], error => {
      if (error){
        throw error
        console.log("SCREAM!")
      }
      response.send("Added: "+ name)
    })
  })

}

const addToRoom = (request, response) => {
  const { room_id, name } = request.body
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }

    client.query("INSERT INTO rooms (room_id, name) VALUES ($1, $2)", [randID, name], error => {
      if (error){
        throw error
        console.log("SCREAM!")
      }
      response.send("Added: "+ name)
    })
  })

}

const newUser = (request, response) => {
  const { email, password } = request.body
  let userID = Math.ceil(50000 * Math.random())

  console.log(email,password)
  pool.connect((err, client, release) => {
    console.log("connected")
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query("INSERT INTO account(user_id, email, password) VALUES ($1,$2, $3)", [userID, email, password], error => {
        if (error) {
          throw error
          console.log("SCREAM!")
        }
        console.log("success")
        response.send("Added: " + email + " with userID: " + userID)
        // response.status(201).json({ status: 'success', message: 'New user added.' })
      })

    })

}

// begin login code
app.get
const login = (request, response) => {
  const { email, password } = request.body
  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query("SELECT email, password FROM account WHERE email = ($1) AND password = ($2)", [email, password], (error, result) => {
        if (error) {
          console.log("SCREAM!")
          response.send({error:error})
          throw error

        }
        response.send(result.rows)
        // response.status(201).json({ status: 'success', message: 'New user added.' })
      })
    })
}



app.post('/api/dashboard', addRoom)
app.post('/api/newUser', newUser)
app.post('/api/login', login)

app.get('/api/login', function(req, res) {
    res.render('handleLogin.ejs');
});

app.get('/chat', function(req, res) {
    res.render('index.ejs');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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

module.exports = {
  addRoom,
  newUser,
  login,
}
