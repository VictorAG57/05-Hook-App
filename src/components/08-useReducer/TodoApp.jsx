import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

// initialState antiguo -->
// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

// Me ayuda a establecer el estado inicial de mi useReducer
// es una forma más eficiente de usar un initial state.
// está función se encarga de retornar y llamar al local storage
// para saber si ay nueva información.
// --> Lo que retorne init() sera el initialState, pero computara todo
//     el estado inicial para ayudar a react y la función no se esté
//     ejecutanto y ejecutando.
const init = () => {

    // Usamos JSON.parse para devolver la información sin el
    // formato JSON, y atravez de localStorage.getItem('toDos')
    // obtenemos la información guardad con el nombre asigando ('toDos' == state)
    // o de lo contrario me devolvera un arreglo vacio al no esxitir 
    // información.
    // De está maneta es como si retornaramos la información para hacer la lógoca
    // y renderizarla.
    return JSON.parse( localStorage.getItem('toDos')) || []; 

    //     return [{
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }];
};

const TodoApp = () => {

    const [ state, dispatch ] = useReducer( todoReducer, [], init );

    // Creamos un efecto secundario
    useEffect(() => {

        // Mediante la función localStorage (mi base de datos predeterminada
        // del navegador) usamos el método .setItem() que me permite agregar
        // un elemento a mi repositorio, el primer argumento es un string el 
        // cuál sera el nombre con el cual identificaremos y llamaremos a esa 
        // información almacenada, y el segundo parametro es la información
        // que debe ser convertida JSON para ser almacenada correcatamente por 
        // ello usamos JSON.stringify().
        localStorage.setItem('toDos', JSON.stringify( state ));
    }, [ state ]); 
    // Y en la dependecia asignamos que se ejecutara esté efecto
    // secundario cada que se agrege un elemento al state.

    // Creamos una función capas de borrar una tarea (toDo) que resive como 
    // parametro el id de la tarea (toDo) que deseamos borrar
    const handleDelete = ( todoId ) => {

        // Asiganamos valores correspondientes para que la función reducer
        // elimine la tarea con los argumentos que le enviamos para realiar está acción
        // borrar la tarea con el id correspondiente a ella.
        const newActionDelate = {
            type: 'delete',
            // Creamos la nueva tarea en este caso borrar el toDo con id
            payload : todoId
        };

        // Enviamos a la función reducer la acción.
        dispatch( newActionDelate );
    };

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    // Está función la usaremos en mi componente TodoAdd,
    // y funcionara como un dispatch pero en una función
    // es mucho más util para cuando queremos hacer la función add
    // y solo agregamos la data, la nueva tarea.
    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload : newTodo
        });
    };

    return (
        <div>
            <h1>ToDo App { state.length }</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        state={ state } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle }>
                    </TodoList>
                </div>

                <div className="col-5">
                    <TodoAdd

                        handleAddTodo={ handleAddTodo }    
                    >

                    </TodoAdd>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
