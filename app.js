const express = require('express');
const RouterNotas = require('./router/RouterNotas'); // Atualizar a importação para RouterNotas

const app = express();
const portaServico = 3000;

// Middleware para habilitar o parsing de JSON no corpo das requisições
app.use(express.json());

const roteadorNotas = new RouterNotas(); // Atualizar a instância para RouterNotas
// Caso chegue uma requisição para /notas
app.use('/notas', roteadorNotas.criarRotasNotas()); // Atualizar a rota base para /notas

// Inicia a espera por requisições HTTP
app.listen(portaServico, () => {
    console.log(`API rodando no endereço: http://localhost:${portaServico}/notas`); // Atualizar mensagem de log
});
