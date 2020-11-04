const express = require('express')
const ejs = require('ejs')
const app = express()
const dbModule = require('./dbModule')
const PersonModel = require('./PersonModel')
const MessageModel = require('./MessageModel')
const port = 3000

const clientDir = __dirname + '\\client\\'

app.use(express.static(clientDir))

app.use(express.json())
app.use(express.urlencoded())

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index.ejs', {name:" "})
});

app.get('/messages', async (req, res) => {
  const posts = await MessageModel.getAllMessages()
  res.render('pages/messages.ejs', { messages: posts.reverse() })
});

app.post('/', (req, res) => {
    let person = PersonModel.createPerson(req.body.name, req.body.email, req.body.age)
  
    dbModule.storeElement(person)
  
    res.render('pages/index.ejs', {name: " " + req.body.name})
  })

  app.post('/postmessage', (req, res) => {
    let message = MessageModel.createMessage(req.body.email, req.body.message)
  
    dbModule.storeElement(message)
  
    res.redirect('/messages')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  }) 