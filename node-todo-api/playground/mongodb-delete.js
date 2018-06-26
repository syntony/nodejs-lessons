const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany - delete all of inserts
  // db.collection('Todos')
  //   .deleteMany({ text: 'Eat lunch' })
  //   .then(result => console.log(result));

  //deleteOne - delete first one
  // db.collection('Todos')
  //   .deleteOne({ text: 'Eat lunch' })
  //   .then(result => console.log(result));

  //findOneAndDelete - get value of query, then delete
  // db.collection('Todos')
  //   .findOneAndDelete({ text: 'Eat lunch' })
  //   .then(result => console.log(result));

  // client.close();
});
