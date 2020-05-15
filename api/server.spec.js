const request = require('supertest');
const server = require('../api/server');

describe('server', () =>{
    it('should set the testing enviroment', () =>{
        expect(process.env.DB_ENV)
        .toBe('testing')
    })
})