const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({ text: 'Hello World!' })
})

app.get('/hola', (req, res) => {
    res.json({ text: 'Hello World! 5' })
})

app.get('/adios', (req, res) => {
    res.json({ text: 'Bye World!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})