// const labb = require('./labb')

// let sum = labb.add(5, 2)
// let dif = labb.sub(5, 2)
// let prod = labb.multi(5, 2)

// console.log("Summan är: " + sum + " Differensen är: " + dif + " Produkten är: " + prod)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))