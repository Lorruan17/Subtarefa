const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Rota Principal<h1>')
})


app.post('/rota2', (req, res) => {
    res.send('<h1>Rota de numero 3<h1><br><h2>Incluir')
})

app.put('/rota3/:id', (req, res) => {
    res.send(`<h1>Rota de numero 3</h1><br><h2>Configurar ou Atualizar<h2> `)
})

app.delete('/rota4/:id', (req, res) => {
    res.send(`<h1>Rota de numero 4</h1><br> <h2>Delete<h2> `)
})

app.get('/rota5', (re1, res) => {
    res.send('<h1>Rota 5<h1><br><h2>Busca de Cadastro')
})


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})