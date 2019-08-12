const hbs = require('hbs');

//helper; se dispara cuando el template lo requiere
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    //arreglo de palabras
    let palabras = texto.split(' ');
    //recibe la posición de la palabra 
    palabras.forEach((palabra, idx) => {
        //actualiza la posición de las palabras
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});