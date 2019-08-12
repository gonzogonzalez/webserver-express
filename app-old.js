const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.write('Holis Crayolis');
        let salida = {
            nombre: 'Gonzalo',
            edad: 22,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(3030);

console.log('Escuchando el puerto 3030');