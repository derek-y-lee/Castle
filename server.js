const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const pool = require('./config.js').pool;
const bcrypt = require('bcrypt');
const crypto = require('crypto');


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
  let randID = Math.random().toString(13).replace('0.', '')

  // let randID = "98sdf98jk"
  const { room_id, name } = request.body
  console.log(randID)
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
  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query("INSERT INTO account(email, password) VALUES ($1,$2)", [email, password], error => {
        if (error) {
          throw error
          console.log("SCREAM!")
        }
        response.send("Added: " + email)
        // response.status(201).json({ status: 'success', message: 'New user added.' })
      })

    })

}

// begin login code
const login = (request, response) => {
  const userReq = request.body
  let user
  findUser(userReq).then(foundUser => {
    user = foundUser
    return checkPassword(userReq.password, foundUser)
  })
  .then((res) => createToken())
  .then(token => updateUserToken(token, user))
  .then(() => {
    delete user.password_digest
    response.status(200).json(user)
  })
  .catch((err) => consle.error(err))
}

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'))
    })
  })
}

const findUser = (userReq) => {
  return DB_DATABASE.raw("SELECT * FROM users WHERE username = ?", [userReq.username])
    .then((data) => data.rows[0])
}

const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
        if (err) {
          reject(err)
        }
        else if (response) {
          resolve(response)
        } else {
          reject(new Error('Passwords do not match.'))
        }
    })
  )
}

const updateUserToken = (token, user) => {
  return database.raw("UPDATE users SET token = ? WHERE id = ? RETURNING id, username, token", [token, user.id])
    .then((data) => data.rows[0])
}
// end login code



app.post('/api/dashboard', addRoom)
app.post('/api', newUser)
app.post('/api', login)

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

module.exports = {
  addRoom,
  newUser,
  login,
}
