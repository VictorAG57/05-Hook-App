import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

const TodoApp = () => {

    const [ state, dispatch ] = useReducer( todoReducer, initialState );

    console.log( state )

    // En el momento que se envíe el formulario -->
    const handleSubmit = ( e ) => {
        // Evitamos que se refresque la página
        e.preventDefault()

        // Creamos la nueva tarea a agregar al estado
        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false
        };

        // Esa nueva tarea es agregada a una acción ( las acciones ayudan
        // a crear un nuevo estado o agregar la nueva tarea )
        const newAction = {
            type: 'add',
            payload : newTodo
        };
        
        // Y enviamos esa acción mediante el dispatch
        dispatch( newAction )
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
                                    <p className="text-center">{ i + 1}. { todo.desc }</p> 

                                    <button className="btn btn-danger">Borrar</button>
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
