const express = require('express');
const UsersRouter = require('../users/usersRouter');

const server = express();

server.use(express.json());
server.use('/api/users', UsersRouter);

server.get('/', (req,res) =>{
    res.json({
        api: 'Its working'
    })
});

module.exports = server;