const saludo = require('./app');

test('Debe retornar "Hello World"', ()=>{
    expect(saludo()).toBe("Hello World");
});

