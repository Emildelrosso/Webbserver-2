const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

let no = "YOU SHALL NOT PASS!"
let yes = "You may pass into the empire of Rome"


const clientDir = __dirname + '\\client\\'


app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))

app.get('/style', (req, res) => {
    res.sendFile(clientDir + 'style.css')
})

app.get('/meme', (req, res) => {
    res.sendFile(clientDir + `meme.png`)
})

app.post('/', function (req, res) {

    if (req.body.age == 17 && req.body.fname === "Emil") {
        console.log(yes)
    }
    else if (req.body.age != 17 && req.body.fname === "Emil") {
        console.log(no)
    }
    else if (req.body.age == 17 && req.body.fname != "Emil") {
        console.log(no)
    }
    else {
        console.log("U no exist")
    }
})

app.listen(port, () => console.log(`Example app listening on port port!`))