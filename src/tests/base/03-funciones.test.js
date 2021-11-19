import { getUser, getUsuarioActivo } from "../../base/03-funciones"

describe('Pruebas en 03-funciones.js', ()=>{

    test('getUser debe retornar un objeto', ()=>{

        const userTest = {
                uid: 'ABC123',
                username: 'El_japon123'
        }

        const user = getUser();

        //para comparar dos objetos utilizamos toEqual
        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo de retornar un objeto', ()=>{

        const nombre = 'Julieta'

        const usuario = getUsuarioActivo( nombre );

        expect( usuario ).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
})