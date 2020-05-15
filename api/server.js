const express = require('express');
const SongsRouter = require('../songs/songs-router');


const server = express();

server.use(express.json());
server.use('/api/songs', SongsRouter);

server.get('/', (req,res) =>{
    res.json({
        api: 'Its working'
    })
});

module.exports = server;