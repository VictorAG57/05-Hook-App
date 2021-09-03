import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en TodoApp', () => {
   
    const wrapper = shallow(<TodoApp></TodoApp>);

    // Simulamos el localStorage --> mock de localStorage.setItem
    Storage.prototype.setItem = jest.fn()
    test('TodoApp debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {

        // mount() === shallow()
        // mount() funciona exactamente igual a shallow() pero, mount() es usado 
        // para testear componentes de maneras más amplias, como para componentes 
        // padres, o los componentes principales que contiene mas sub componentes,
        // y shallow() es más individual, para componentes menos generales.

        const wrapper = mount( <TodoApp> </TodoApp>);

        // Además aquí al usar mount() no puedes realizar la acción direcatmente,
        // si no que lo debes envolver en un act(), exactamente lo que está aquí abajo,
        // es decir deveces usar act con mount().
        act( ()=> {
            // Llamamos dos veces el 'handleAddTodo' con diferentes objetos.
            // Aquí ejecutamos inmediatamente 'handleAddTodo'.
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0]); 
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1]); 
        }); 

        // Comprovamos el contenido de la etiqueta 'h1'.
        expect( wrapper.find('h1').text().trim() ).toBe(  'ToDo App 2' );

        //--> Compravamos que se dispare el localStorage
        // Comprovamos cuantas veces devio ser llamado mi localStorage.setItem,
        // es decir, el que cambia el elemento (.setItem), y en esté caso 2
        // ya que en el act() lo llamamos dos veces.
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2)
    });

    test('Debe de eliminar un TODO', () => {

        // Hacemos lo mismo que arriba, agergamos un TODO.
        // Aquí ejecutamos inmediatamente 'handleAddTodo'.
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        // Pero aquí lo eliminamos.
        // Aquí ejecutamos inmediatamente 'handleDelete'.
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        // Comprovamos el contenido de la etiqueta 'h1'. Debería ser 0.
        // ya que eliminamos un elemento recien agregado, lo que nos da 0 TODOS.
        expect( wrapper.find('h1').text().trim() ).toBe( 'ToDo App 0' );
    });
    
});
