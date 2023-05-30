const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let cadastro = [];

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Cadastro de Tarefas!')
});

app.get('/lista', (req, res) => {
    res.json(cadastro);
});

app.get('/busca/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Busca pelo ID ${id}`);
});

app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    res.json(`Atualização da tarefa de ID ${id}: ${title}, ${description}`);
});

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Deleção da tarefa de ID ${id}`);
});

app.post('/cadastro', (req, res) => {
  const { title, description } = req.body;
  const newCadastro = { title, description };
  cadastro.push(newCadastro);
  res.status(201).json(newCadastro);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
