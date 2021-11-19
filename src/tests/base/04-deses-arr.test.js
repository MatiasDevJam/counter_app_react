import { retornarArray } from "../../base/04-deses-arr"

describe('Pruebas en 04-deses-arr.js', ()=>{

    test('Pruebas en desestructuración', ()=>{

        const [ letras, numeros ] = retornarArray();

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    })
})