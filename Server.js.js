const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Porta alterada para evitar conflito com MySQL

app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'juliete1', // cuidado com senhas hardcoded em produção
  database: 'meu_banco_de_dados',
});

db.connect((err) => {
  if (err) {
    console.error('Erro de conexão com o banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

// Rota para receber dados do frontend e salvar no banco
app.post('/api/usuarios', (req, res) => {
  const { nome, email, telefone, senha } = req.body;

  if (!nome || !email || !telefone || !senha) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  const query = 'INSERT INTO usuarios (nome, email, telefone, senha) VALUES (?, ?, ?, ?)';
  db.query(query, [nome, email, telefone, senha], (err, result) => {
    if (err) {
      console.error('Erro ao salvar os dados:', err);
      return res.status(500).send('Erro ao salvar os dados');
    }
    res.status(200).send('Usuário salvo com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});