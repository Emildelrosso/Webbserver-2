const mongoose = require('mongoose')
const PersonModel = require('./PersonModel')
const MessageModel = require('./MessageModel')

  mongoose.connect('mongodb://localhost/test', 
  {useNewUrlParser: true, useUnifiedTopology: true})

  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Great, you started your database")
});


exports.storeElement = (element) => {
  element.save(() => {
    console.log("Successfully saved info in your database")
  })
}