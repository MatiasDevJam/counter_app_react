import { getImagen } from "../../base/07-async-await"

describe('Pruebas en 07-async-await', () =>{

    test('debe retornar el url de la imagen', async() =>{

        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );
    })
})