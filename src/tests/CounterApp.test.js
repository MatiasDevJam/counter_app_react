import React from "react";
import { shallow } from 'enzyme';

import CounterApp from "../CounterApp";

describe('Pruebas en < CounterApp />', () => {

    let wrapper= shallow( < CounterApp /> );; 

    // con esta función reincializamos el componente para cada test
    beforeEach( () => {
        wrapper = shallow( < CounterApp /> );
    })

    test('debe mostrar < CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={ 100 } /> );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '100' );
    })

    test('debe incrementar el valor del boton +1', () => {

        // buscamos el primer el boton y simulamos el click
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '11' );
    })

    test('debe decrementar el valor del boton -1', () => {

        // buscamos el primer el boton y simulamos el click
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '9' );
    })

    test('debe colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow(<CounterApp value={ 110 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '110' );
    })
})