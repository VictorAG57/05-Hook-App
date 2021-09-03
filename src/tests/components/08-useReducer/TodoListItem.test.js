import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";
import "@testing-library/jest-dom";

describe('Pruebas en TodoListItem', () => {

    // Usamos jest.fn() para simular estás dos funciones y así
    // las pruebas funcionen correctamente.
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    // Definimos las propiedades que debe de llevar el componente a
    // evaluar.
    const wrapper = shallow(
        <TodoListItem
            todo={ demoTodos[0] }
            i={ 0 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        >
        </TodoListItem>
    );

    test('Debe mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe llamar la función borrar', () => {
        // Aquí lo que haremos es evaluar que nuestra función simulada (handleDelete)
        // se allá llamado al dar click al botón, para ello simulamos el click.
        // Está función debe ser llamada con argumentos, y esté debe ser el id del
        // todo que le hemos definido desde un inicio al componente al pasar los props.
        // Es decir, comprovamos que se allá llamdo la función pero con el argumento
        // espesificado, el ID. Para ellos usamos --> toHaveBeenCalledWith(argumento).

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('Debe llamar la función toggle', () => {
        // Aquí lo que haremos es evaluar que nuestra función simulada (handleToggle)
        // se allá llamado al dar click al parrafo (<p></p>), para ello simulamos el click.
        // Está función debe ser llamada con argumentos, y esté debe ser el id del
        // todo que le hemos definido desde un inicio al componente al pasar los props.
        // Es decir, comprobamos que se allá llamdo la función pero con el argumento
        // espesificado, el ID. Para ellos usamos --> toHaveBeenCalledWith(argumento).

        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('Debe de mostrar el texto correctamente ', () => {
        // De esté lado comprovamos que se allá renderizado el texto esperado
        // dentro de <p></p>, para ello filtramos la etiqueta, y esperamos
        // que el texto del parrafo (p.text()) se igual al esperado.

        const p = wrapper.find('p');
       
        expect( p.text() ).toBe( `1. ${ demoTodos[0].desc }` );
    });

    test('Debe de tener la clase .complate', () => {
        // Y por ultimo comprovamos que se ejecute la clase de css 'complate'
        // cuando la propiedad done del todo este en true, o ald dar click 
        // sobre el parrafo, en esté caso haremos la primera opción.

        // Primero espesificaremos que la propiedad onde se encuentre en true, ya
        // qu epor defecto está en false.
        const todo = demoTodos[0]
        todo.done = true;

        let wrapper = shallow(
            <TodoListItem
                todo={ todo }
            >
            </TodoListItem>
        );

        // Una vez echo esto verificamos que nuestro parrafo contenga
        // la clase 'complate', para ello usamos .hasClass(), es decir
        // que contenga la clase, lo que sera true.
        // .hasClass( claseCSS ) --> contega la clase 
        const p = wrapper.find('p');
        expect( p.hasClass('complete') ).toBe( true );
    });
});
