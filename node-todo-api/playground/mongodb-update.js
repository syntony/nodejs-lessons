const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos')
    .findOneAndUpdate({
      _id: new ObjectID("5b2e0eb9bfde2e3629445563")
    }, {
      $set: {
        completed: true
      }
      //, $inc: {} - increment
    }, {
      returnOriginal: false
    })
    .then(result => console.log(result))

  client.close();
});
