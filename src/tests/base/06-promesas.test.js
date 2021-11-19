import { getHeroeByIdAsync } from "../../base/06-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', ()=>{

    /* debemos pasarle como argumento 'done' y luego ejecutarlo para 
    realizar una función asincrona */
    test('getHeroeByIdAsync debe retornar un Héroe con async', ( done ) =>{

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            })

    });

    test('debe obtener un error si el héroe por id no existe', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error =>{

                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            } )
    })
})