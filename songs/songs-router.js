const express = require('express');
const router = express.Router();

const db = require('../songs/songs-model');

router.get('/', (req,res) =>{
    db.getAll()
    .then(songs =>{
        res.status(200).json(songs)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({errorMessage:'Error getting all songs'})
    })
})

module.exports = router;