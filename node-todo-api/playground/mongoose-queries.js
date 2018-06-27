const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5b33569ad7fb630cad75f405';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
//   })
//   .catch(e => console.log(e));

// User
User.findById('5b337330a9e04a69fc5b69c8')
  .then(user => {
    if (!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log(e))
