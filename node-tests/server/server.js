const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  })
});

app.get('/users', (req, res) => {
  res.send([{
      name: 'Anthony',
      age: 27
    }, {
      name: 'Anastacia',
      age: 28
    }, {
      name: 'Insomnia',
      age: 4
    }, {
      name: 'John',
      age: 666
  }]);
})

app.listen(3000);
module.exports.app = app;
