const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    email: String,
    message: String
  });

const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (email, message) => {
  let messages = new Message({
    email: email,
    message: message
   })
   return messages
}

exports.getAllMessages = async () => {
  let messages = await Message.find({})
  return messages
}