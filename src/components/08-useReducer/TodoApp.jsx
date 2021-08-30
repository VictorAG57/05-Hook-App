import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';

import './styles.css';

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

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

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

    // En el momento que se envíe el formulario -->
    const handleSubmit = ( e ) => {
        // Evitamos que se refresque la página
        e.preventDefault()

        if (description.trim().length <= 1){
            return ;
        }

        // Creamos la nueva tarea a agregar al estado
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // Esa nueva tarea es agregada a una acción ( las acciones ayudan
        // a crear un nuevo estado o agregar la nueva tarea )
        const newAction = {
            type: 'add',
            payload : newTodo
        };
        
        // Y enviamos esa acción mediante el dispatch
        dispatch( newAction );

        // Me permite resetear el formulario depues de agregar una tarea.
        reset()
    };

    return (
        <div>
            <h1>ToDo App { state.length }</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            state.map( ( todo, i ) => (
                                <li
                                    key={ todo.id }
                                    className="list-group-item"
                                > 
                                    <p 
                                        className={`${ todo.done && 'complete'}`}
                                        onClick={ ()=> handleToggle( todo.id )}
                                    >
                                        { i + 1}. { todo.desc }
                                    </p> 
                                    <button 
                                        className="btn btn-danger"
                                        onClick= { () => handleDelete(todo.id) }
                                    >
                                        Borrar
                                    </button>
                                </li>
                                
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                    <h3>Agregar TODO</h3>
                    <hr></hr>
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            placeholder="descripción..."
                            className="form-control"
                            value={ description }
                            onChange={ handleInputChange }
                        >
                        </input>

                        <button 
                            className="btn btn-primary mt-1 form-control"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
