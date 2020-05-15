const knex = require('knex');
const config = require('../knexfile.js');

const enviroment = process.env.DB_ENV || 'development'

const db = knex(config.[enviroment]);

module.exports = db;