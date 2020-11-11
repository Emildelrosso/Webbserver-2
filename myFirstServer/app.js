const express = require('express')
const ejs = require('ejs')
const dbModule = require('./dbModule')
const PersonModel = require('./PersonModel')
const MessageModel = require('./MessageModel')
const UserModel = require('./UserModel')

const port = 3000
const app = express()
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

app.get('/login', (req, res) => {
  res.render('pages/login.ejs')
})

app.get('/register', (req, res) => {
  res.render('pages/register.ejs')
})

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

  app.post('/register', async (req, res) => {
    let user = UserModel.createUser(req.body.uName, req.body.uEmail, req.body.uPassword)
     await dbModule.storeElement(user)
        res.redirect('/login')
  })

  app.post('/login', async (req, res) => {
    let user = await UserModel.getUser(req.body.uName)

    if (user) {
      if (user.password === req.body.uPassword) {
        res.send('SUCCESS')
      } else {
        res.send('INCORRECT PASSWORD')
      }
    } else {
      res.send('USER DOES NOT EXIST')
    } 

  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  }) 