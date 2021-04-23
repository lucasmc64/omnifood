const express = require('express'); // Importa o Express

const routes = require('./routes'); // Importa as rotas

const server = express(); // Cria o servidor com base no Express

server.use(express.urlencoded({ extended: true })); // Permite requisições do ripo POST

server.use(function (request, response, next) { // Permissões de acesso (CORS)
    // Website que desejamos conectar
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // Request métodos que vamos permitir
    response.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers que vamos permitir
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    next();
});

server.use(routes);

server.listen(7141, function () {
    console.log('🚀 Server is running!')
})