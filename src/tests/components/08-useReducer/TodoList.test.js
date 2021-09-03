import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoList></TodoList>', () => {

    // Usamos jest.fn() para simular estás dos funciones y así
    // las pruebas funcionen correctamente.
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList
            state={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        >
        </TodoList>
    );

    test('Debe mostrarse correcatmente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoListItem></TodoListItem> ', () => {
        // Por cada objeto dentro de demoTodos, se creara un 'TodoListItem'

        // Queremos ver cuantos 'TodoListItem' tenemos, en esté caso deven ser
        // igual a la cantidad de objetos que tenemos dentro de demoTodos, ya
        // que por cada objeto, se creara un 'TodoListItem'.
        expect( wrapper.find('TodoListItem').length).toBe( demoTodos.length );

        // Evaluamos que <TodoListItem /> que esta dentro de nuestro componente principal,
        // resiva como propiedad/prop 'handleDelete' y 'handleTogele', y que esto sea
        // igual a cualquier función (expect.any(Function)). 
        // Lo que buscamos es que contenga como propiedades esas dos funciones y que estás
        // mismas sean funciones, de cualquier tipo de función, pero debe ser función.
        // Espesificamos posición (at.(0)) porque en la propiedad state mandamos dos objetos,
        // dos todos y necesitamos espesificar en cual queremos ver la propiedad.
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );
        expect( wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual( expect.any(Function) );

    });
});
