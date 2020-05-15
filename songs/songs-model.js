const db = require('../data/db.config');

function getAll(){
return db('songs');
},

function getById(id){
return null
},

function update(id, changes){
    return null
}

function insert(song){
return null
};

function delete(id){
retrun null
};

module.exports = {
    getAll,
    getById,
    update,
    insert,
    delete,
}