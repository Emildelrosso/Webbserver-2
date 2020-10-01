const express = require('express')
const app = express()
const dbModule = require('./dbModule')
const port = 3000

const clientDir = __dirname + '\\client\\'

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(clientDir + 'index.html')
})

app.get('/style', (req, res) => {
    res.sendFile(clientDir + 'style.css')
})

app.get('/meme', (req, res) => {
    res.sendFile(clientDir + `meme.png`)
})

app.post('/', (req, res) => {
    console.log(req.body.name)
    console.log(req.body.email)
  
    dbModule.storePerson(req.body.name, req.body.email, req.body.age)
  
    res.redirect('/')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  }) 