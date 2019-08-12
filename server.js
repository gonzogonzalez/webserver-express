const express = require('express');
//Producto de la función espress
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//instrucción que siempre se ejecuta sin importar que url pida el cliente
app.use(express.static(__dirname + '/public'));
//Expres HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gonzalo',
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});
app.listen(port, () => {
    console.log(`Escuchando peteciones en el puerto ${ port }`);
});