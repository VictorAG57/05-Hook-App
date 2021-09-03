import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHook from '../../../components/03-examples/MultipleCustomHook';
import useFetch from '../../../hooks/useFetch';
import useCounter from '../../../hooks/useCounter';
// Me permite somular la llamada a useFetch, de está manera nos evitamos
// llamarlo y hacerle pruebas a esté custom hook que ya hemos provado
jest.mock('../../../hooks/useFetch');
// jest.mock('../../../hooks/useCounter');


describe('El componente funcione correctamente', () => {

    // useCounter.mockReturnValue({
    //     // simulación de valor por retorno --> 10 === counter/state
    //     counter: 1,
    //     increment: ()=> {}
    // });

    test('Debe de mostrarse correctamente', () => {

        // Al hacer la simulación, estos valores son los que la smulación
        // de dicho custom hook me va a retornar y así travajaremos con 
        // cada prueba, podemos cambiar la información según lo que querramos
        // probar.
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook></MultipleCustomHook> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de muestra la información', () => {

        // Al hacer la simulación, estos valores son los que la smulación
        // de dicho custom hook me va a retornar y así travajaremos con 
        // cada prueba, podemos cambiar la información según lo que querramos
        // probar.
        useFetch.mockReturnValue({
            data: [{
                author: 'Victor',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHook></MultipleCustomHook>);

        // Si la peticion con useFetch se hixo exitosamente, entonces la 
        // calse de css .alert deberia de existir, ya que al cumplirse la 
        // petición llama un fragmento de hatml que contiene está clase de css
        // de no existir, significa que no se hizo correctamente la petición,
        // ya que esa clase solo existe al completarse exitosamente la petcióm.
        expect( wrapper.find('.alert').exists()).toBe( false );
        // Hacemos exactamente lo mismo acá pero con otro método y clase
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola mundo' );
        // Verificamos que el autor del footer sea el establecido en
        // useFetch.mockReturnValue({})
        expect( wrapper.find('footer').text().trim() ).toBe( 'Victor' );

        console.log( wrapper.html)
        // expect( wrapper ).toMatchSnapshot();
    });
});
