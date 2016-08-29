var express = require('express');
var app = express();
const PORT = 8080;

var contatos = [{
    nome: "Fulano",
    telefone: "9999-2222",
    data: new Date(),
    operadora: {
        nome: "Tim",
        codigo: 14,
        categoria: "Celular"
    }
}];

app.get('/contatos', function(req, res) {
    res.json(contatos);
});

app.listen(PORT);
