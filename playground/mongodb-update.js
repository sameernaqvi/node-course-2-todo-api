//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondogDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5beab07fb976e25c5bb0d275')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bcf0c638993d3011cc06330')
  }, {
    $set: {
      name: 'Robert'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
