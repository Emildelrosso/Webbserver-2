//getting-started.js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  });

const Person = mongoose.model('Person', personSchema);

var emil = new Person({ name: "Emil", email: "a@a.a", age: 17})

emil.save()