const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

const newTodo = new Todo({
  text: 'Feed the cat',
  completed: false,
  completedAt: Math.floor(Date.now() / 1000)
});

newTodo.save().then(doc => {
  console.log(JSON.stringify(doc, undefined, 2));
}, e => {
  console.log('Unable to save todo', e);
});
