
describe('Pruebas en el archivo demo.test.js', ()=>{
    test( 'debe ser iguales los string', ()=>{
    
        //1. Inicialización
        const mensaje = 'Hola Mundo';
    
        //2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // Comparamos que ambos valores sean ===
        expect( mensaje ).toBe( mensaje2 );
    } )

})

