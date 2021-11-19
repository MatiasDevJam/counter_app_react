import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', ()=>{

    test('prueba en el método getSaludo', ()=>{

        const nombre = 'Julieta';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );
    })
})