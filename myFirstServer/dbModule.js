const mongoose = require('mongoose')
const PersonModel = require('./PersonModel')
const MessageModel = require('./MessageModel')

  mongoose.connect('mongodb://localhost/test', 
  {useNewUrlParser: true, useUnifiedTopology: true})

  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // We're connected!
});


exports.storeElement = async (element) => {
 await element.save() 
}