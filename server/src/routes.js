const express = require('express');

const mailer = require('./mailer');
const { validateForm } = require('./validators');


const routes = express.Router();

routes.post('/contact', validateForm, async (request, response) => {
    const { name, email, find_us, news, message } = request.body;

    let message_body = `
        <h1>Best regards!</h1>
        <p><strong>${name}</strong> is wanting to talk!</p>
        <p>Met us through ${find_us}!</p>
    `;

    message_body += news ? `<p>And you are interested in subscribing to our newsletter.</p>` : '';
    message_body += `
        <p>Here's your message:</p>
        <p>${message}</p>
    `

    try {
        await mailer.sendMail({
            to: 'contact@omnifood.com',
            from: email,
            subject: 'Aloha Omnifood Team!',
            html: message_body
        });

        await mailer.sendMail({
            to: email,
            from: 'contact@omnifood.com',
            subject: 'Hello food lover!',
            html: `
                <h1>We are very happy to contact us!</h1>
                <p>We received your message and soon our team will return a response to you!</p>
                <br>
                <p>Sincerely, Omnifood Team.</p>
            `
        });

        return response.send('Take a look at your email box! 😉');
    } catch (error) {
        console.error(error);
        return response.send('Houston, we have a problem. Try to send the message later or send an email directly to contact@omnifood.com.');
    }
});

module.exports = routes