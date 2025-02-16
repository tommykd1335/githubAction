const saludo = require('./app');

test('Debe retornar "Hola Mundo"', ()=>{
    expect(saludo()).toBe("Hola Mundo");
})
