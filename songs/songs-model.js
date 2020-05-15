const db = require('../data/db.config');

function getAll(){
return db('songs');
};

function getById(id){
return null
};

function update(id, changes){
    return null
};

function insert(song){
return null
};

function remove(id){
return null
};

module.exports = {
    getAll,
    getById,
    update,
    insert,
    remove,
}