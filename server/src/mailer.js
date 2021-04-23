const nodemailer = require('nodemailer'); // Importa o nodemailer

// Esse bloco é disponibilizado pelo cliente de email para se integrar ao Nodemailer.
const transport = nodemailer.createTransport({ 
    host: "127.0.0.1",
    port: 1025,
    auth: {
        user: "INSERT_YOUR_USER_HERE",
        pass: "INSERT_YOUR_PASSWORD_HERE"
    }
});

// Exporta as configs
module.exports = transport
