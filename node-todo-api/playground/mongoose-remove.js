const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({})
//   .then(res => console.log(res))
//   .catch(e => console.log(e));

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({
  _id: 'id'
})
  .then(todo => console.log(todo))
  .catch(e => console.log(e));

Todo.findByIdAndRemove('id')
  .then(todo => console.log(todo))
  .catch(e => console.log(e));
