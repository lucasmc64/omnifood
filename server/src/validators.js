function validateForm(request, response, next) {
    const { name, email, find_us, news, message } = request.body;

    if(name === '' || email === '' || message === '') {
        return response.send('Please, fill all fields!');
    }

    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.match(email_regex)) {
        return response.send('Please, insert a valid email address!');
    }

    next();
}

module.exports = {
    validateForm
}