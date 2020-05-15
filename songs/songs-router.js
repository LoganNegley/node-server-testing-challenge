const express = require('express');
const router = express.Router();

const db = require('../songs/songs-model');

router.get('/api/songs', (req,res) =>{
    db.getAll()
    .then(songs =>{
        res.status(200).json(songs)
    })
    .catch(res.status(500).json({errorMessage: 'Unable to get songs'}))
})

module.exports = router;