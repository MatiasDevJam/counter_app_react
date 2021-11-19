import { getHeroeById, getHeroeByOwner } from "../../base/05-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 05-imp-exp.js', ()=>{

    test('debe de retornar un heroe por id', ()=>{

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    });

    test('debe de retornar undefined si Heroe no existe', ()=>{

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });

    test('debe de retornar un array con los heroes de DC', ()=>{

        const owner = 'DC';
        const heroe = getHeroeByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );
    });

    test('debe de retornar un array con los heroes de Marvel', ()=>{

        const owner = 'Marvel';
        const heroes = getHeroeByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    });
})