const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  
  describe('GET /', () => {
    it('should return hello world response', done => {
      request(app)
        .get('/')
        .expect(404)
        // .expect({
        //   error: 'Page not found.'
        // })
        .expect(res => {
          expect(res.body).toInclude({
            name: 'Todo App v1.0'
          })
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: 'Anthony',
            age: 27
          })
        })
        .end(done);
    });
  });
})
