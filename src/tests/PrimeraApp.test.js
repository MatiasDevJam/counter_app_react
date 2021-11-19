import React from "react";
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    /* esta prueba solo funciona con testing library react
    test('debe de mostrar el mensaje "Hola, Soy Goku', () => {

        const saludo = 'Hola, soy Goku';
        const wrapper = render( <PrimeraApp saludo= { saludo } /> );
        expect( getByText( saludo ) ).toBeInTheDocument();
    }) */

    test('debe mostrar < PrimeraApp /> correctamente', () => {

        // debemos importar shallow
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( < PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
        < PrimeraApp 
            saludo={ saludo }
            subtitulo={ subTitulo }
        /> );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitulo );
    })
})