import { todoReducer } from "../../../components/08-useReducer/todoReducer";
// Importamos la data fictisia que emos creado para usarla en
// las pruebas.
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en mi todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        // todoReducer() regresara un estado

        // Resive como arguento está función, el estado el cual
        // estamos simulano con demoTodos, y la acción, que por 
        // caso inicial estara vacia.
        // Llamamos al todoReducer() con el estado, y al no
        // enviar ningúna acción regresara el estado inicial tal
        // cúal.
        const state = todoReducer( demoTodos, {})

        // Esperamos que no restorne el estado inicial enviado ya
        // que no envíamos ningúna acción qu emodifique el estado.
        expect( state ).toEqual( demoTodos );
    });

    test('Debe de agregar un todo ', () => {

        // todoReducer me permite agregar un nuevo todo, para ello
        // creamos esté nuevo todo --> newRodo ={}
        const newTodo = {
            id: 3,
            todo: 'Aprender JS',
            done: false
        };
        // Y creamos la acción, todo debe corresponder con la función reducer,
        // espesificamos el type: 'add', que en mi reducer indica que agregemos
        // el nuevo todo, y el payload, que es la data, lo que agreraemos.

        const action = {
            type: 'add',
            payload: newTodo
        };

        // Llmamos  nuestro reducer con el estado y la acción que me retornara
        // un estado nuevo pero con el nuevo elemento que emos indicado, el 
        // newTodo.
        const state = todoReducer( demoTodos, action );
        // console.log( state )

        // 1. Evaluamos que la posición 3 de mi nuevo estado, sea el nuevo
        //    que hemos agregado.
        expect( state[2] ).toEqual( newTodo );
        // 2. Evaluamos que contenga 3 objetos demtro el estado.
        expect( state.length ).toBe( 3 );
        // 3. Y evaluamos que el estado contenga el estado iniacial que 
        //    emos indicado (...demoTodos) más el nuevo objeto (newTodo).
        expect( state ).toEqual([ ...demoTodos, newTodo ]);
    });

    test('Debe de eliminar un todo ', () => {

        // Hacemos lo mismo que en la parte superior, cremos un nuevo todo
        // que posteriormente eliminaremos.

        const newTodo = {
            id: 3,
            todo: 'Aprender JS',
            done: false
        };
        
        const action = {
            type: 'add',
            payload: newTodo
        };

        let state = todoReducer( demoTodos, action );
        // console.log(state)

        // A qui comprovamos que efectivamente se allá creado un todo más,
        // y sean tres y no dos, y este tercer todo lo eliminaremos.
        expect( state.length ).toBe(3)

        // Primero creamos la acción qu enos permite eliminar con el
        // type: que puede leer mi reducer, 'delate', y en el payload llevara
        // el id del todo que deseamos eliminar, en esté caso el nuevo que hemos
        // creado.
        const actionDelate = {
            type: 'delete',
            payload: newTodo.id
        };

        // Volvemos a ejecutar pero con la acción diferente, delate
        state = todoReducer( state, actionDelate );
        console.log( state, 'Holaa' )

        // y comprovamos que efectimante se allá eliminado, ya que veremos
        // solo dos de tres que teniamos.
        expect( state.length ).toBe(2)
    });

    test('Debe de hacer TOGGLE al todo ', () => {
        // Aquí lo que haremos es marcar como 'true' la propiedad 'done'.

        // La acción debe llevar 'toggle' para indicar que cambiaremos el 
        // valor de done, y llevara dentro del payload también el id
        // para saber a cual todo marcar como true.
        const actionToggle = {
            type: 'toggle',
            payload: demoTodos[0].id
        };

        // Ejecutamos la acción
        const state = todoReducer( demoTodos, actionToggle );

        // Evaluamos que efectivamente la rpopiedad done allá cambiado a true
        expect( state[0].done ).toBe( true );

        // Y comprovamos que el segundo elemento del arreglo siga exactamente
        // igual, y así sabremos que solo habra cambiado el primero.
        expect( state[1] ).toEqual( demoTodos[1] );

    });
});
