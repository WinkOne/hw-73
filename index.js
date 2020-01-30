const express = require('express');

const Vigenere = require('caesar-salad').Vigenere;

const app = express();

const port = 8001;

const password = 'password';


app.get('/:text', (req, res) => {
    res.send(req.params.text);
});

app.get('/encode/:text', (req, res) => {
    const encode = Vigenere.Cipher(password).crypt(req.params.text);
    res.send(encode)
});

app.get('/decode/:text', (req, res) => {
    const decode = Vigenere.Decipher(password).crypt(req.params.text);
    res.send(decode)
});

app.listen(port, () => {
    console.log(port)
});