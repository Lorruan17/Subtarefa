const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Rota Base</h1>')
})

app.get('/rota2', (req, res) => {
    res.send('<h1>Rota de número 2<h1/><p><h2>teste')
})

app.get('/rota3', (req, res) => {
    res.send('<h1>Rota de número 3</h1>')
})

app.get('/rota4', (req, res) => {
    res.send('<h1>Ultima Rota!</h1>')
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})